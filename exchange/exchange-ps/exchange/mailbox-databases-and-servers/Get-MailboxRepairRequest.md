---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Server 2013, Exchange Server 2016
title: Get-MailboxRepairRequest
schema: 2.0.0
monikerRange: "exchserver-ps-2013 || exchserver-ps-2016"
---

# Get-MailboxRepairRequest

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-MailboxRepairRequest cmdlet to display information about current mailbox repair requests. Mailbox repair requests are created using the New-MailboxRepairRequest cmdlet to detect and fix mailbox corruptions.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set2
```
Get-MailboxRepairRequest [-Database] <DatabaseIdParameter> [[-StoreMailbox] <StoreMailboxIdParameter>]
 [-DomainController <Fqdn>] [<CommonParameters>]
```

### Set1
```
Get-MailboxRepairRequest [-Identity] <StoreIntegrityCheckJobIdParameter> [-Detailed] [-DomainController <Fqdn>]
 [<CommonParameters>]
```

### Set3
```
Get-MailboxRepairRequest [-Mailbox] <MailboxIdParameter> [-Archive] [-DomainController <Fqdn>]
 [<CommonParameters>]
```

## DESCRIPTION
The Get-MailboxRepairRequest cmdlet displays information about mailbox repair requests. This information includes:

- The mailbox GUID.

- The type of corruption that was specified when the mailbox repair request was created.

- The progress of the repair request in percentage of completion.

- The number of corruptions detected and fixed.

- The status of the repair request; values are Queued, Running, Succeeded and Failed.

- The date and time when the mailbox repair request was created and when it finished.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-MailboxDatabase | Get-MailboxRepairRequest | Format-Table Identity; Get-MailboxRepairRequest -Identity 5b8ca3fa-8227-427f-af04-9b4f206d611f\335c2b06-321d-4e73-b2f7-3dc2b02d0df5\374289de-b899-42dc-8391-4f8579935f1f | Format-List
```

This example displays the value of the Identity property for all mailbox repair requests for all mailbox servers in your organization; the second command displays information about a specific mailbox repair request that was returned by the first command.

### -------------------------- Example 2 --------------------------
```
Get-MailboxRepairRequest -Mailbox "Ann Beebe" | Format-List
```

This example displays repair request information for the mailbox of Ann Beebe using the Mailbox parameter.

### -------------------------- Example 3 --------------------------
```
$MailboxGuid = Get-MailboxStatistics annb; Get-MailboxRepairRequest -Database $MailboxGuid.Database -StoreMailbox $MailboxGuid.MailboxGuid | Format-List Identity
```

This example uses the Database and StoreMailbox parameters to display the Identity property of the repair request for the mailbox of Ann Beebe.

## PARAMETERS

### -Database
The Database parameter specifies the database on which you run this command. If you use this parameter, all mailboxes on the database are searched for corruptions. You can use the following values:

- GUID of the database

- Database name

You can't use this parameter with the Mailbox parameter.

```yaml
Type: DatabaseIdParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the mailbox repair request to display information about. Mailbox repair requests are identified by a complex GUID that is created when a new mailbox repair request is created. This GUID consists of a database ID, a Request ID and a job ID. The format is \<DatabaseGuid\>\\\<RequestGuid\>\\\<JobGuid\>.

```yaml
Type: StoreIntegrityCheckJobIdParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Mailbox
The Mailbox parameter specifies the mailbox that you want to get mailbox repair request information about. You can use the following values:

- GUID

- Distinguished name (DN)

- Domain\\Account

- User principal name (UPN)

- LegacyExchangeDN

- SMTP address

- Alias

You can't use this parameter with the Database parameter.

```yaml
Type: MailboxIdParameter
Parameter Sets: Set3
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Archive
If the associated archive mailbox was included when the mailbox repair request was created, use the Archive parameter to display information about the archive mailbox. If you don't specify this parameter, only information about the primary mailbox is returned.

You can't use this parameter with the Database parameter.

```yaml
Type: SwitchParameter
Parameter Sets: Set3
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Detailed
Use the Detailed parameter to display mailbox-level repair tasks associated with the repair request.

```yaml
Type: SwitchParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

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
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StoreMailbox
The StoreMailbox parameter specifies the mailbox GUID of the mailbox that you want to get mailbox repair request information about. Use this parameter with the Database parameter.

Use the Get-MailboxStatistics cmdlet to find the mailbox GUID for a mailbox.

```yaml
Type: StoreMailboxIdParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: 2
Default value: None
Accept pipeline input: True
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

[Online Version](https://technet.microsoft.com/library/1b9d3047-8e4c-4847-af01-ce7513b7aa7b.aspx)
