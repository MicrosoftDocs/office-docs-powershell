---
external help file: Microsoft.Exchange.RecordsandEdge-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: Start-ManagedFolderAssistant
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019 || exchonline-ps"
---

# Start-ManagedFolderAssistant

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Start-ManagedFolderAssistant cmdlet to immediately start messaging records management (MRM) processing of mailboxes that you specify.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Start-ManagedFolderAssistant [-Identity] <MailboxOrMailUserIdParameter> [-Confirm] [-DomainController <Fqdn>]
 [-WhatIf] [-HoldCleanup] [-InactiveMailbox] [-AggMailboxCleanup] [<CommonParameters>]
```

## DESCRIPTION
The Managed Folder Assistant uses the retention policy settings of users' mailboxes to process retention of items. This mailbox processing occurs automatically. You can use the Start-ManagedFolderAssistant cmdlet to immediately start processing the specified mailbox.

In Exchange Server 2010 release to manufacturing (RTM), the Identity parameter specifies the Mailbox server to start the assistant and process all mailboxes on that server, and the Mailbox parameter specifies the mailbox to process. In Exchange 2010 Service Pack 1 (SP1) and later, the Mailbox parameter has been removed, and the Identity parameter accepts the mailbox or mail user to process.

If you use these parameters in scheduled commands or scripts, we recommend that you review them and make any necessary changes.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Start-ManagedFolderAssistant -Identity "Chris"
```

This example processes the mailbox for a user with the alias Chris.

### -------------------------- Example 2 --------------------------
```
Get-Mailbox -Anr Chr -DomainController DC01 | Start-ManagedFolderAssistant
```

This example uses the Get-Mailbox command to retrieve all the mailboxes that resolve from the ambiguous name resolution (ANR) search on the string "Chr" in the domain DC01 (for example, users such as Chris Ashton, Christian Hess, and Christa Geller), and the results are piped to the Start-ManagedFolderAssistant cmdlet for processing.

## PARAMETERS

### -Identity
The Identity parameter specifies the mailbox to be processed. In cross-premises deployments, you can also specify a mail user who has a mailbox in the cloud. You can use any value that uniquely identifies the mailbox or mail user.

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

```yaml
Type: MailboxOrMailUserIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HoldCleanup
The HoldCleanup switch instructs the Managed Folder Assistant to clean up duplicate versions of items in the Recoverable Items folder that may have been created when a mailbox is on In-Place Hold, Litigation Hold, or has Single Item Recovery enabled. You don't need to specify a value with this switch.

Removing duplicate items from the Recoverable Items folder reduces the folder size and may help prevent reaching Recoverable Items quota limits. For more details about Recoverable Items quota limits, see Recoverable Items folder in Exchange 2016 (https://technet.microsoft.com/library/ee364755.aspx).

```yaml
Type:
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: false
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InactiveMailbox
This parameter is available only in the cloud-based service.

The InactiveMailbox specifies whether the command runs only on inactive mailboxes. You don't need to specify a value with this switch..

An inactive mailbox is a mailbox that's placed on Litigation Hold or In-Place Hold before it's soft-deleted. The contents of an inactive mailbox are preserved until the hold is removed

When you use this switch, items aren't moved from the inactive mailbox to the archive mailbox.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AggMailboxCleanup
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online
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

[Online Version](https://technet.microsoft.com/library/75d840ea-5abc-44bb-b361-e81561fa1b04.aspx)
