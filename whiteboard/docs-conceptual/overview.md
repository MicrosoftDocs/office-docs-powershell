# Overview

## Installing

To install and use the Microsoft Whiteboard cmdlets:

1. Open the start menu and search for Windows PowerShell
2. Right-click on Windows PowerShell and choose Run As Administrator
3. Type or copy this command into the window and press the Enter key: Install-Module -Name WhiteboardAdmin

You may need to update your execution policy, which you can do by typing or copying this command into the window and pressing the Enter key: Set-ExecutionPolicy RemoteSigned 

Note: For more information on Execution_Policies, go to https://go.microsoft.com/fwlink/?LinkID=135170

## User IDs

Cmdlets taking user IDs use the ID from Azure Active Directory. To get a user ID, you can use the Microsoft Graph Explorer. For more information, go to https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/user_get

## Common Cmdlets

* [Get-Whiteboard](../whiteboard-ps/whiteboard/Get-Whiteboard.md)
* [Set-WhiteboardOwner](../whiteboard-ps/whiteboard/Set-WhiteboardOwner.md)
* [Invoke-TransferAllWhiteboard](../whiteboard-ps/whiteboard/Invoke-TransferAllWhiteboards.md)