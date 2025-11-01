// Mock Data
let mockData = {
  societies: [
    { id: 1, name: 'Green Valley Apartments', city: 'Mumbai', admin: 'Rajesh Kumar', members: 45 },
    { id: 2, name: 'Sunrise Society', city: 'Delhi', admin: 'Priya Sharma', members: 32 },
    { id: 3, name: 'Blue Heaven Complex', city: 'Bangalore', admin: 'Amit Patel', members: 68 }
  ],
  admins: [
    { id: 1, name: 'Rajesh Kumar', email: 'rajesh@greenvalley.com', society: 'Green Valley Apartments' },
    { id: 2, name: 'Priya Sharma', email: 'priya@sunrise.com', society: 'Sunrise Society' },
    { id: 3, name: 'Amit Patel', email: 'amit@blueheaven.com', society: 'Blue Heaven Complex' }
  ],
  members: [
    { id: 1, name: 'Suresh Reddy', email: 'suresh@email.com', phone: '9876543210', status: 'Active', verified: true, society: 'Green Valley Apartments' },
    { id: 2, name: 'Meena Iyer', email: 'meena@email.com', phone: '9876543211', status: 'Active', verified: true, society: 'Green Valley Apartments' },
    { id: 3, name: 'Vikram Singh', email: 'vikram@email.com', phone: '9876543212', status: 'Inactive', verified: false, society: 'Green Valley Apartments' },
    { id: 4, name: 'Anjali Nair', email: 'anjali@email.com', phone: '9876543213', status: 'Active', verified: true, society: 'Green Valley Apartments' }
  ],
  payments: [
    { month: 'January 2024', amount: 5000, status: 'Paid' },
    { month: 'February 2024', amount: 5000, status: 'Paid' },
    { month: 'March 2024', amount: 5000, status: 'Pending' }
  ],
  currentUser: {
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Super Admin'
  }
};

// Utility Functions
function openDialog(dialogId) {
  document.getElementById(dialogId).classList.add('active');
}

function closeDialog(dialogId) {
  document.getElementById(dialogId).classList.remove('active');
}

function logout() {
  localStorage.removeItem('userRole');
  window.location.href = 'login.html';
}

function setActiveNav(pageId) {
  document.querySelectorAll('.nav-bar a').forEach(link => {
    link.classList.remove('active');
  });
  const activeLink = document.querySelector(`.nav-bar a[href="${pageId}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }
}

// Get current user role
function getCurrentRole() {
  return localStorage.getItem('userRole') || 'Super Admin';
}

// Get current user info
function getCurrentUser() {
  const role = getCurrentRole();
  return {
    ...mockData.currentUser,
    role: role
  };
}

// Update user badge
function updateUserBadge() {
  const badgeEl = document.getElementById('userBadge');
  if (badgeEl) {
    badgeEl.textContent = getCurrentRole();
  }
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
  updateUserBadge();
});
