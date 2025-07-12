---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-mailboxrepairrequest
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Get-MailboxRepairRequest
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Get-MailboxRepairRequest

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-MailboxRepairRequest cmdlet to display information about current mailbox repair requests. Mailbox repair requests are created using the New-MailboxRepairRequest cmdlet to detect and fix mailbox corruptions.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Database
```
Get-MailboxRepairRequest [-Database] <DatabaseIdParameter> [[-StoreMailbox] <StoreMailboxIdParameter>]
 [-DomainController <Fqdn>]
 [<CommonParameters>]
```

### Identity
```
Get-MailboxRepairRequest [-Identity] <StoreIntegrityCheckJobIdParameter> [-Detailed]
 [-DomainController <Fqdn>]
 [<CommonParameters>]
```

### Mailbox
```
Get-MailboxRepairRequest [-Mailbox] <MailboxIdParameter> [-Archive]
 [-DomainController <Fqdn>]
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

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-MailboxDatabase | Get-MailboxRepairRequest | Format-Table Identity

Get-MailboxRepairRequest -Identity 5b8ca3fa-8227-427f-af04-9b4f206d611f\335c2b06-321d-4e73-b2f7-3dc2b02d0df5\374289de-b899-42dc-8391-4f8579935f1f | Format-List
```

This example displays the value of the Identity property for all mailbox repair requests for all mailbox servers in your organization; the second command displays information about a specific mailbox repair request that was returned by the first command.

### Example 2
```powershell
Get-MailboxRepairRequest -Mailbox "Ann Beebe" | Format-List
```

This example displays repair request information for the mailbox of Ann Beebe using the Mailbox parameter.

### Example 3
```powershell
$MailboxGuid = Get-MailboxStatistics annb

Get-MailboxRepairRequest -Database $MailboxGuid.Database -StoreMailbox $MailboxGuid.MailboxGuid | Format-List Identity
```

This example uses the Database and StoreMailbox parameters to display the Identity property of the repair request for the mailbox of Ann Beebe.

## PARAMETERS

### -Identity
The Identity parameter specifies the mailbox repair request to display information about. Mailbox repair requests are identified by a complex GUID that is created when a new mailbox repair request is created. This GUID consists of a database ID, a Request ID and a job ID. The format is `DatabaseGuid\RequestGuid\JobGuid`.

You can't use this parameter with the Database or Mailbox parameters.

```yaml
Type: StoreIntegrityCheckJobIdParameter
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Database
The Database parameter returns mailbox repair requests for all mailboxes on the specified database. You can use any value that uniquely identifies the database. For example:

- Name
- Distinguished name (DN)
- GUID

You can't use this parameter with the Identity or Mailbox parameters.

```yaml
Type: DatabaseIdParameter
Parameter Sets: Database
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Mailbox
The Mailbox parameter specifies the mailbox that you want to get mailbox repair request information about. You can use any value that uniquely identifies the mailbox. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Domain\\Username
- Email address
- GUID
- LegacyExchangeDN
- SamAccountName
- User ID or user principal name (UPN)

You can't use this parameter with the Database or Identity parameters.

```yaml
Type: MailboxIdParameter
Parameter Sets: Mailbox
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -StoreMailbox
The StoreMailbox parameter specifies the mailbox GUID of the mailbox that you want to get mailbox repair request information about. Use this parameter with the Database parameter.

Use the Get-MailboxStatistics cmdlet to find the mailbox GUID for a mailbox.

```yaml
Type: StoreMailboxIdParameter
Parameter Sets: Database
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: 2
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Archive
The Archive switch displays information about the associated archive mailbox if the archive mailbox was included when the mailbox repair request was created. You don't need to specify a value with this switch.

If you don't use this switch, only information about the primary mailbox is returned.

You can't use this switch with the Database parameter.

```yaml
Type: SwitchParameter
Parameter Sets: Mailbox
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Detailed
Use the Detailed parameter to display mailbox-level repair tasks associated with the repair request. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
