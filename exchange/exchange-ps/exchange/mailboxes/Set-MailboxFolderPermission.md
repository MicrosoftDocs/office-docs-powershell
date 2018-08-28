---
external help file: Microsoft.Exchange.CalendarsAndGroups-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: Set-MailboxFolderPermission
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019 || exchonline-ps"
---

# Set-MailboxFolderPermission

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-MailboxFolderPermission cmdlet to modify folder-level permissions for users in mailboxes. This cmdlet differs from the Add-MailboxFolderPermission cmdlet in that it modifies existing permission entries. To configure calendar publishing or sharing settings for a mailbox so calendar information is visible to external users, use the Set-MailboxCalendarFolder cmdlet.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-MailboxFolderPermission [-Identity] <MailboxFolderIdParameter> -AccessRights <MailboxFolderAccessRight[]>
 -User <MailboxFolderUserIdParameter> [-Confirm] [-DomainController <Fqdn>] [-WhatIf] [-SendNotificationToUser <$true | $false>] [-SharingPermissionFlags <None | Delegate | CanViewPrivateItems>]
 [<CommonParameters>]
```

## DESCRIPTION
In Office 365, if you don't use the SendNotificationToUser or SharingPermissionFlags parameters, there are no changes to the functionality of the cmdlet. For example, if the user is an existing delegate, and you change their permissions to Editor without using the SendNotificationToUser or SharingPermissionFlags parameters, the user remains a delegate. But, if you use the SendNotificationToUser parameter ($true or $false), the SharingPermissionFlags parameter has the default value None, which can affect delegate access for existing users. For example, you change an existing delegate's permission to Editor, and you use SendNotificationToUser with the value $true. The user will no longer be a delegate and will only have Editor permissions to the folder.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-MailboxFolderPermission -Identity ayla@contoso.com:\Marketing -User ed@contoso.com -AccessRights Owner
```

This example overwrites Ed's existing permissions for the Marketing folder in Ayla's mailbox. Ed is now granted the Owner role on the folder.

### -------------------------- Example 2 --------------------------
```
Set-MailboxFolderPermission -Identity ayla@contoso.com:\Calendar -User ed@contoso.com -AccessRights Editor -SharingPermissionFlags Delegate -SendNotificationToUser $true
```

In Office 365, this example resends the sharing invitation to an existing delegate without changing their effective permissions (Ed is already a delegate with Editor permissions to Ayla's mailbox).

### -------------------------- Example 3 --------------------------
```
Set-MailboxFolderPermission -Identity ayla@contoso.com:\Calendar -User ed@contoso.com -AccessRights Editor -SharingPermissionFlags Delegate
```

In Office 365, this example removes access to private items for an existing delegate.

### -------------------------- Example 4 --------------------------
```
Set-MailboxFolderPermission -Identity ayla@contoso.com:\Calendar -User ed@contoso.com -AccessRights Editor -SharingPermissionFlags None
```

In Office 365, this example changes an existing calendar delegate to Editor.

### -------------------------- Example 5 --------------------------
```
Set-MailboxFolderPermission -Identity ayla@contoso.com:\Calendar -User ed@contoso.com -AccessRights Editor
```

In Office 365, this example changes an existing user's permissions to Editor without changing their current delegate status.

### -------------------------- Example 6 --------------------------
```
Set-MailboxFolderPermission -Identity ayla@contoso.com:\Calendar -User ed@contoso.com -AccessRights Editor -SendNotificationToUser $false
```

In Office 365, this example changes an existing user's permissions to Editor and removes their current delegate status.

## PARAMETERS

### -AccessRights
The AccessRights parameter specifies the permissions that you want to modify for the user on the mailbox folder. The values that you specify replace the existing permissions for the user on the folder.

You can specify individual folder permissions or roles, which are combinations of permissions. You can specify multiple permissions and roles separated by commas.

The following individual permissions are available:

- CreateItems: The user can create items in the specified folder.

- CreateSubfolders: The user can create subfolders in the specified folder.

- DeleteAllItems: The user can delete all items in the specified folder.

- DeleteOwnedItems: The user can only delete items that they created from the specified folder.

- EditAllItems: The user can edit all items in the specified folder.

- EditOwnedItems: The user can only edit items that they created in the specified folder.

- FolderContact: The user is the contact for the specified public folder.

- FolderOwner: The user is the owner of the specified folder. The user can view the folder, move the move the folder, and create subfolders. The user can't read items, edit items, delete items, or create items.

- FolderVisible: The user can view the specified folder, but can't read or edit items within the specified public folder.

- ReadItems: The user can read items within the specified folder.

The roles that are available, along with the permissions that they assign, are described in the following list:

- Author:CreateItems, DeleteOwnedItems, EditOwnedItems, FolderVisible, ReadItems

- Contributor:CreateItems, FolderVisible

- Editor:CreateItems, DeleteAllItems, DeleteOwnedItems, EditAllItems, EditOwnedItems, FolderVisible, ReadItems

- None:FolderVisible

- NonEditingAuthor:CreateItems, FolderVisible, ReadItems

- Owner:CreateItems, CreateSubfolders, DeleteAllItems, DeleteOwnedItems, EditAllItems, EditOwnedItems, FolderContact, FolderOwner, FolderVisible, ReadItems

- PublishingEditor:CreateItems, CreateSubfolders, DeleteAllItems, DeleteOwnedItems, EditAllItems, EditOwnedItems, FolderVisible, ReadItems

- PublishingAuthor:CreateItems, CreateSubfolders, DeleteOwnedItems, EditOwnedItems, FolderVisible, ReadItems

- Reviewer:FolderVisible, ReadItems

The following roles apply specifically to calendar folders:

- AvailabilityOnly: View only availability data

- LimitedDetails: View availability data with subject and location

```yaml
Type: MailboxFolderAccessRight[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the target mailbox and folder. The syntax is \<Mailbox\>:\\\<Folder\>. For the value of \<Mailbox\>, you can use any value that uniquely identifies the mailbox.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- \<domain name\>\\\<account name\>

- Email address

- GUID

- LegacyExchangeDN

- SamAccountName

- User ID or user principal name (UPN)

Example values for the Identity parameter are john@contoso.com:\\Calendar or John:\\Marketing\\Reports.

```yaml
Type: MailboxFolderIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -User
The User parameter specifies the mailbox, mail user, or mail-enabled security group (security principal) that's granted permission to the mailbox folder. You can use any value that uniquely identifies the user or group.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

```yaml
Type: MailboxFolderUserIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SendNotificationToUser
This parameter is available only in the cloud-based service.

The SendNotificationToUser parameter specifies whether to send a sharing invitation to the user when you modify their calendar permissions. The message will be a normal calendar sharing invitation that can be accepted by the recipient. Valid values are:

- $true: A sharing invitation is sent.

- $false: No sharing invitation is sent. This is the default value.

This parameter only applies to calendar folders and can only be used with the following AccessRights parameter values:

- AvailabilityOnly

- LimitedDetails

- Reviewer

- Editor

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SharingPermissionFlags
This parameter is available only in the cloud-based service.

The SharingPermissionFlags parameter assigns calendar delegate permissions. This parameter only applies to calendar folders and can only be used when the AccessRights parameter value is Editor. Valid values are:

- None: Removes delegate permissions and updates the meeting message rule so the user stops receiving meeting invites and responses for the mailbox. This is the default value when you use the SendNotificationToUser parameter without specifying a value for the SharingPermissionFlags parameter.

- Delegate: The user is made a calendar delegate, which includes receiving meeting invites and responses. If there are no other delegates, this value will create the meeting message rule. If there are existing delegates, the user is added to the meeting message rule without changing how delegate messages are sent.

- CanViewPrivateItems: The user can access private items on the calendar. You must use this value with the Delegate value.

You can specify multiple values separated by commas.

```yaml
Type: None | Delegate | CanViewPrivateItems
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/ca5dc7ba-5aa7-4fbc-945a-c5d06b9a1065.aspx)
