import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { LogOut, Mail, Calendar } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface EmailEntry {
  _id: string;
  email: string;
  createdAt: string;
}

const AdminDashboard = () => {
  const [emails, setEmails] = useState<EmailEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication
    const isAuth = sessionStorage.getItem('zeliq_admin_auth');
    if (!isAuth) {
      navigate('/iufwiufhvwiruf');
      return;
    }

    fetchEmails();
  }, [navigate]);

  const fetchEmails = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/emails');
      const data = await response.json();
      if (data.success && Array.isArray(data.data)) {
        setEmails(data.data);
        setError('');
      } else {
        setEmails([]);
        setError('Failed to load emails');
      }
    } catch (error) {
      console.error('Error fetching emails:', error);
      setEmails([]);
      setError('Unable to connect to server');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('zeliq_admin_auth');
    navigate('/iufwiufhvwiruf');
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
            <p className="text-zinc-400">Manage and view collected data</p>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="border-zinc-700 text-white hover:bg-zinc-800"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="emails" className="space-y-6">
          <TabsList className="bg-zinc-800 border-zinc-700">
            <TabsTrigger value="emails" className="data-[state=active]:bg-zinc-700">
              <Mail className="mr-2 h-4 w-4" />
              Email Entries
            </TabsTrigger>
          </TabsList>

          <TabsContent value="emails" className="space-y-4">
            <Card className="bg-zinc-900/80 border-zinc-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Mail className="mr-2 h-5 w-5 text-primary" />
                  Collected Emails
                </CardTitle>
                <CardDescription className="text-zinc-400">
                  Emails submitted through age verification page
                </CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="text-center py-8 text-zinc-400">Loading...</div>
                ) : error ? (
                  <div className="text-center py-8 text-red-400">{error}</div>
                ) : emails.length === 0 ? (
                  <div className="text-center py-8 text-zinc-400">
                    No emails collected yet
                  </div>
                ) : (
                  <div className="rounded-md border border-zinc-700">
                    <Table>
                      <TableHeader>
                        <TableRow className="border-zinc-700 hover:bg-zinc-800/50">
                          <TableHead className="text-zinc-300">Email Address</TableHead>
                          <TableHead className="text-zinc-300">
                            <Calendar className="inline mr-2 h-4 w-4" />
                            Submitted At
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {emails.map((entry) => (
                          <TableRow
                            key={entry._id}
                            className="border-zinc-700 hover:bg-zinc-800/50"
                          >
                            <TableCell className="font-medium text-white">
                              {entry.email}
                            </TableCell>
                            <TableCell className="text-zinc-400">
                              {formatDate(entry.createdAt)}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
                {!error && (
                  <div className="mt-4 p-4 bg-zinc-800/50 rounded-lg">
                    <p className="text-sm text-zinc-400">
                      Total Emails: <span className="text-white font-semibold">{emails?.length || 0}</span>
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
