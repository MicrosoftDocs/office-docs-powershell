---
external help file: Microsoft.Exchange.WebClient-Help.xml
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: Update-PublicFolderMailbox
schema: 2.0.0
monikerRange: "exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019 || exchonline-ps"
---

# Update-PublicFolderMailbox

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Update-PublicFolderMailbox cmdlet to update the hierarchy for public folders.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set2
```
Update-PublicFolderMailbox [-Identity] <MailboxIdParameter> [-Confirm] [-DomainController <Fqdn>] [-FullSync]
 [-InvokeSynchronizer] [-ReconcileFolders] [-SuppressStatus] [-WhatIf] [<CommonParameters>]
```

### Set4
```
Update-PublicFolderMailbox [-Identity] <MailboxIdParameter> -FolderId <PublicFolderIdParameter>
 [-InvokeSynchronizer] [-Confirm] [-CreateAssociatedDumpster] [-DomainController <Fqdn>] [-WhatIf]
 [<CommonParameters>]
```

### Set3
```
Update-PublicFolderMailbox [-Identity] <MailboxIdParameter> [-InvokeSynchronizer] [-Confirm]
 [-DomainController <Fqdn>] [-ForceOnlineSync] [-FullSync] [-ReconcileFolders] [-SuppressStatus] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet only needs to be used if you want to manually invoke the hierarchy synchronizer and the mailbox assistant. Both these are invoked at least once every 24 hours for each public folder mailbox in the organization. The hierarchy synchronizer is invoked every 15 minutes if any users are logged on to a secondary mailbox through Outlook or a Exchange Web Services client.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Update-PublicFolderMailbox -Identity PF_marketing -SuppressStatus
```

This example updates the public folder hierarchy on the public folder mailbox PF\_marketing and suppresses the command's output.

### -------------------------- Example 2 --------------------------
```
Get-Mailbox -PublicFolder | Update-PublicFolderMailbox -SuppressStatus
```

This example updates all public folder mailboxes and suppresses the command's output.

## PARAMETERS

### -Identity
The Identity parameter specifies the identity of the public folder mailbox. This parameter accepts the following values:

- GUID

- Distinguished name (DN)

- Domain\\Account

- User principal name (UPN)

- Legacy Exchange DN

- SMTP address

- Alias

```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: True
Position: 1
Default value: None
Accept pipeline input: True
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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
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
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FullSync
The FullSync switch specifies that you want to perform a full synchronization of the public folder mailbox.

```yaml
Type: SwitchParameter
Parameter Sets: Set2, Set3
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InvokeSynchronizer
The InvokeSynchronizer switch can only be used on secondary hierarchy public folder mailboxes and triggers hierarchy synchronization from the primary public folder mailbox to the specified secondary public folder mailbox.

This switch should only be used for troubleshooting purposes.

```yaml
Type: SwitchParameter
Parameter Sets: Set2, Set3
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: SwitchParameter
Parameter Sets: Set4
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReconcileFolders
The ReconcileFolders switch specifies whether to look closely for differences in the folder hierarchy between the primary public folder mailbox and the secondary public folder mailbox. Folders that exist in the primary public folder mailbox and not in the secondary will be recreated. Folders that exist in the secondary public folder mailbox and not in the primary will be deleted.

This switch should only be used for repair or troubleshooting purposes to look for differences in the public folder hierarchy that aren't detected by a regular synchronization. These undetected differences may occur in database failover or disaster recovery scenarios. You must use this switch with the InvokeSynchronizer switch.

```yaml
Type: SwitchParameter
Parameter Sets: Set2, Set3
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SuppressStatus
The SuppressStatus switch specifies that the output of this cmdlet is suppressed and that the command will run asynchronously in the background from the Exchange Management Shell. If you don't use this switch in the command, the output will display status messages every 3 seconds for up to one minute. Until the minute passes, you can't use that instance of the Shell.

```yaml
Type: SwitchParameter
Parameter Sets: Set2, Set3
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FolderId
The FolderId parameter specifies the GUID or name of the public folder that you want to synchronize. You can also include the path using the format \\TopLevelPublicFolder\\PublicFolder.

```yaml
Type: PublicFolderIdParameter
Parameter Sets: Set4
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CreateAssociatedDumpster
The CreateAssociatedDumpster switch specifies whether to create the associated dumpster before synchronizing the folder. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Set4
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForceOnlineSync
The ForceOnlineSync switch specifies whether to force the secondary public folder mailbox to synchronize with the primary public folder mailbox. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Set3
Aliases:
Applicable: Exchange Server 2016, Exchange Online
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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/36a24f50-89d9-4976-884d-f46eacd0f4d4.aspx)
