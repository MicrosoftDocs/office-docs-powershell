---
Module Name: Microsoft Whiteboard Admin
Module Guid: CC24F7D4-4CF7-46D3-BD87-30A3D44ECF96
title: Microsoft Whiteboard
Locale: en-US
---

# Microsoft Whiteboard Admin

## Description

The following cmdlet references are for Microsoft Whiteboard.

## Overview

To install and use the Microsoft Whiteboard cmdlets:

Open the start menu and search for Windows PowerShell

Right-click on Windows PowerShell and choose Run As Administrator

Type or copy this command into the window and press the Enter key: Install-Module -Name WhiteboardAdmin

You may need to update your execution policy, which you can do by typing or copying this command into the window and pressing the Enter key: Set-ExecutionPolicy RemoteSigned 

Note: For more information on Execution_Policies, go to https:/go.microsoft.com/fwlink/?LinkID=135170

## User IDs

Cmdlets taking user IDs use the ID from Azure Active Directory. To get a user ID, you can use the Microsoft Graph Explorer. For more information, go to https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/user_get

## Cmdlets

### [Get-Whiteboard](Get-Whiteboard.md)

### [Set-WhiteboardOwner](Set-WhiteboardOwner.md)

### [Invoke-TransferAllWhiteboard](Invoke-TransferAllWhiteboards.md)
