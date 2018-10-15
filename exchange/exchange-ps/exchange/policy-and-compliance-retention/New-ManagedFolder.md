---
external help file: Microsoft.Exchange.RecordsandEdge-Help.xml
applicable: Exchange Server 2010
title: New-ManagedFolder
schema: 2.0.0
monikerRange: "exchserver-ps-2010"
---

# New-ManagedFolder

## SYNOPSIS
This cmdlet is available only in Exchange Server 2010.

Use the New-ManagedFolder cmdlet to create a managed folder object for messaging records management (MRM).

This command doesn't accept pipelined input.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set2
```
New-ManagedFolder [-Name] <String>
 -DefaultFolderType <Calendar | Contacts | DeletedItems | Drafts | Inbox | JunkEmail | Journal | Notes | Outbox | SentItems | Tasks | All | RssSubscriptions | SyncIssues | ConversationHistory>
 [-BaseFolderOnly <$true | $false>] [-Comment <String>] [-Confirm] [-DomainController <Fqdn>]
 [-LocalizedComment <MultiValuedProperty>] [-MustDisplayCommentEnabled <$true | $false>]
 [-Organization <OrganizationIdParameter>] [-WhatIf] [<CommonParameters>]
```

### Set1
```
New-ManagedFolder [-Name] <String> -FolderName <String> [-BaseFolderOnly <$true | $false>] [-Comment <String>]
 [-Confirm] [-DomainController <Fqdn>] [-LocalizedComment <MultiValuedProperty>]
 [-LocalizedFolderName <MultiValuedProperty>] [-MustDisplayCommentEnabled <$true | $false>]
 [-Organization <OrganizationIdParameter>] [-StorageQuota <Unlimited>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The New-ManagedFolder cmdlet creates a new managed folder in Active Directory. After a new managed folder object is created, the following steps need to be taken to use it for MRM:

- Create managed content settings for the folder. For information, see Create Managed Content Settings.

- Link the managed folder to an existing managed folder mailbox policy or create a managed folder mailbox policy and link the managed folder to it.

- Apply a managed folder mailbox policy to a user's mailbox. For information, seeApply a Managed Folder Mailbox Policy to Users.

- Ensure the managed folder assistant is scheduled or run the managed folder assistant manually. For information about scheduling the managed folder assistant, see Configure the Managed Folder Assistant. When the managed folder assistant runs, it configures default folders as managed and creates any managed custom folders in the user's mailbox with the settings specified.

- For more information about the steps to implement MRM in Microsoft Exchange Server 2010, see Deploying Messaging Records Management.

By default, managed custom folders are created with this cmdlet. However, you can also create additional copies of managed default folders using the DefaultFolderType parameter to specify which type of default folder to create (for example, an additional Inbox folder). When you create multiple copies of a managed default folder, you can assign different content settings to each one. For example, you could have two Inbox folders, one named InboxSixMonths and another named InboxOneYear. Then, you could assign a retention time of six months to the first folder and one year to the second folder with the New-ManagedContentSettings cmdlet (or using the New Managed Content Settings wizard in the Exchange Management Console). You must assign a unique name (using the Name parameter) to each of the managed default folders that you create. Users, however, always see the unaltered default folder name. In the example, whether users are assigned an InboxSixMonths folder or an InboxOneYear folder, the Inbox that they see in their mailbox is labeled Inbox. Although the folder names that users see in their mailboxes can be reassigned for managed custom folders (using the Set-ManagedFolder command FolderName parameter), the folder names seen by users for managed default folders can't be changed.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
New-ManagedFolder -Name NewFolder -FolderName "New Folder" -StorageQuota "1 MB"
```

This example creates a managed folder that has a maximum capacity of 1 MB.

### -------------------------- Example 2 --------------------------
```
New-ManagedFolder -Name MyFolder -FolderName "My Folder" -LocalizedFolderName Spanish:"Mi Carpeta", French:"Mon Dossier" -Comment "My comment" -LocalizedComment Spanish:"Mi comentario", French:"Mon annotation"
```

This example creates a managed folder that has a default folder name and comment in English, localized folder name in Spanish and French, and localized comment in Spanish and French.

### -------------------------- Example 3 --------------------------
```
New-ManagedFolder -Name AnotherInbox -DefaultFolderType Inbox
```

This example creates an instance of the default folder Inbox.

## PARAMETERS

### -DefaultFolderType
The DefaultFolderType parameter specifies the type of default folder to create, such as Inbox or Deleted Items.

A managed folder mailbox policy can have only one managed folder of each default folder type. Additional default folders of a particular type, such as Inbox, can be created and added to different mailbox policies. This allows you to assign different managed content settings for a particular default folder type for different sets of users.

For example, you could have two default folders of type Inbox, one with managed content settings set to retain messages for one month and one with settings to retain messages for one year. Each managed default folder should have a unique name (assigned using the Name parameter).

If a value isn't entered for the DefaultFolderType parameter, it's treated as a managed custom folder.

The default folder types that you can specify are:

- Calendar

- Contacts

- DeletedItems

- Drafts

- Inbox

- JunkEmail

- Journal

- Notes

- Outbox

- SentItems

- Tasks

- All

- ManagedCustomFolder

- RssSubscriptions

- SyncIssues

- ConversationHistory

```yaml
Type: Calendar | Contacts | DeletedItems | Drafts | Inbox | JunkEmail | Journal | Notes | Outbox | SentItems | Tasks | All | RssSubscriptions | SyncIssues | ConversationHistory
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FolderName
The FolderName parameter specifies the folder name as it appears in users' mailboxes. The folder name can have up to 255 characters. You can't set the FolderName parameter for managed default folders, such as Inbox.

The FolderName parameter shouldn't be confused with the Name parameter.

```yaml
Type: String
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies a unique name for the managed folder object in Active Directory. The name can have up to 65 characters. Whereas the FolderName parameter specifies the folder name as displayed to users in  clients, the Name parameter is used by Exchange administration tools to represent the managed folder object.

The Name parameter shouldn't be confused with the FolderName parameter.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BaseFolderOnly
The BaseFolderOnly parameter specifies whether the managed content settings should be applied only to the managed folder or to the folder and all its subfolders.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Comment
The Comment parameter specifies the default administrator comment to be displayed with the folder in Microsoft Office Outlook 2007 and Microsoft Office Outlook Web App. The comment can have up to 255 characters, including spaces.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
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
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalizedComment
The LocalizedComment parameter specifies localized administrator comments and their languages. When the language setting of Outlook 2007 matches one of the locales specified in this parameter, the corresponding localized comment is displayed. Comments must be in the form ISOLanguageCode:Comment (for example, -LocalizedComment EN-US:"This is a localized comment in U.S. English").

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalizedFolderName
The LocalizedFolderName parameter specifies the localized folder names and their languages. When the language setting of Outlook 2007 matches one of the locales specified in this parameter, the corresponding localized folder name is displayed. Folder names must be in the form ISOLanguageCode:FolderName (for example, -LocalizedFolderName EN-US:"Business Critical").

```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MustDisplayCommentEnabled
The MustDisplayCommentEnabled parameter specifies whether to set a flag used by Outlook 2007 to prevent users from minimizing a folder comment (that's visible in Outlook 2007 and Outlook Web App). If the MustDisplayCommentEnabled parameter is present and set to $true, the parameter sets a flag used by Outlook 2007 to prevent users from minimizing a folder comment. If the parameter isn't present or is set to $false, users can minimize the comment.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Organization
This parameter is available for multi-tenant deployments. It isn't available for on-premises deployments. For more information about multi-tenant deployments, see Multi-Tenant Support.

The Organization parameter specifies the organization in which you'll perform this action. This parameter doesn't accept wildcard characters, and you must use the exact name of the organization.

```yaml
Type: OrganizationIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StorageQuota
The StorageQuota parameter specifies the storage size limit for the mailbox folder. When the folder size exceeds this limit, no additional items may be added. Storage size limits can be specified in kilobytes (KB) or megabytes (MB), for example, 100 KB or 5 MB.

```yaml
Type: Unlimited
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010
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
Applicable: Exchange Server 2010
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

[Online Version](https://technet.microsoft.com/library/fcc46b8b-0ceb-495a-b9e7-264bb96dc050.aspx)
