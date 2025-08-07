---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online
author: chrisda
external help file: Microsoft.Exchange.ServerStatus-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-mailboxstatistics
schema: 2.0.0
title: Get-MailboxStatistics
---

# Get-MailboxStatistics

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings might be exclusive to one environment or the other.

Use the Get-MailboxStatistics cmdlet to return information about a mailbox, such as the size of the mailbox, the number of messages it contains, and the last time it was accessed. In addition, you can get the move history or a move report of a completed move request.

**Note**: In Exchange Online PowerShell, we recommend that you use the Get-EXOMailboxStatistics cmdlet instead of this cmdlet. For more information, see [Connect to Exchange Online PowerShell](https://learn.microsoft.com/powershell/exchange/connect-to-exchange-online-powershell).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Database
```
Get-MailboxStatistics -Database <DatabaseIdParameter> [[-StoreMailboxIdentity] <StoreMailboxIdParameter>]
 [-CopyOnServer <ServerIdParameter>]
 [-DomainController <Fqdn>]
 [-Filter <String>]
 [-IncludeMoveHistory]
 [-IncludeMoveReport]
 [-IncludeQuarantineDetails]
 [-NoADLookup]
 [<CommonParameters>]
```

### Identity
```
Get-MailboxStatistics [-Identity] <GeneralMailboxOrMailUserIdParameter>
 [-Archive]
 [-CopyOnServer <ServerIdParameter>]
 [-DomainController <Fqdn>]
 [-IncludeMoveHistory]
 [-IncludeMoveReport]
 [-IncludeQuarantineDetails]
 [-IncludeSoftDeletedRecipients]
 [-NoADLookup]
 [-UseCustomRouting]
 [<CommonParameters>]
```

### Server
```
Get-MailboxStatistics -Server <ServerIdParameter>
 [-DomainController <Fqdn>]
 [-Filter <String>]
 [-IncludeMoveHistory]
 [-IncludeMoveReport]
 [-IncludePassive]
 [-IncludeQuarantineDetails]
 [-NoADLookup]
 [<CommonParameters>]
```

## DESCRIPTION
On Mailbox servers only, you can use the Get-MailboxStatistics cmdlet without parameters. In this case, the cmdlet returns the statistics for all mailboxes on all databases on the local server.

The Get-MailboxStatistics cmdlet requires at least one of the following parameters to complete successfully: Server, Database or Identity.

You can use the Get-MailboxStatistics cmdlet to return detailed move history and a move report for completed move requests to troubleshoot a move request. To view the move history, you must pass this cmdlet as an object. Move histories are retained in the mailbox database and are numbered incrementally and the last executed move request is always numbered 0. For more information, see "Example 7," "Example 8," and "Example 9" in this topic.

You can only see move reports and move history for completed move requests.

**Note**: We're deprecating the LastUserActionTime property in Exchange Online PowerShell. Don't use the value of that property as the last active time for a mailbox.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-MailboxStatistics -Identity AylaKol
```

This example retrieves the mailbox statistics for the mailbox of the user Ayla Kol by using its associated alias AylaKol.

### Example 2
```powershell
Get-MailboxStatistics -Server MailboxServer01
```

This example retrieves the mailbox statistics for all mailboxes on the server MailboxServer01.

### Example 3
```powershell
Get-MailboxStatistics -Identity contoso\chris
```

This example retrieves the mailbox statistics for the specified mailbox.

### Example 4
```powershell
Get-MailboxStatistics -Database "Mailbox Database"
```

This example retrieves the mailbox statistics for all mailboxes in the specified mailbox database.

### Example 5
```powershell
Get-MailboxDatabase | Get-MailboxStatistics -Filter 'DisconnectDate -ne $null'
```

This example retrieves the mailbox statistics for the disconnected mailboxes for all mailbox databases in the organization. The -ne operator means not equal.

### Example 6
```powershell
Get-MailboxStatistics -Database "Mailbox Database" -StoreMailboxIdentity 3b475034-303d-49b2-9403-ae022b43742d
```

This example retrieves the mailbox statistics for a single disconnected mailbox. The value for the StoreMailboxIdentity parameter is the mailbox GUID of the disconnected mailbox. You can also use the LegacyDN.

### Example 7
```powershell
Get-MailboxStatistics -Identity AylaKol -IncludeMoveHistory | Format-List
```

This example returns the summary move history for the completed move request for Ayla Kol's mailbox. If you don't pipeline the output to the Format-List cmdlet, the move history doesn't display.

### Example 8
```powershell
$temp=Get-MailboxStatistics -Identity AylaKol -IncludeMoveHistory

$temp.MoveHistory[0]
```

This example returns the detailed move history for the completed move request for Ayla Kol's mailbox. This example uses a temporary variable to store the mailbox statistics object. If the mailbox is moved multiple times, there are multiple move reports. The last move report is always MoveReport[0].

### Example 9
```powershell
$temp=Get-MailboxStatistics -Identity AylaKol -IncludeMoveReport

$temp.MoveHistory[0] | Export-CSV C:\MoveReport_AylaKol.csv
```

This example returns the detailed move history and a verbose detailed move report for Ayla Kol's mailbox. This example uses a temporary variable to store the move request statistics object and outputs the move report to a CSV file.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The Identity parameter specifies the mailbox that you want to return statistics for. You can use any value that uniquely identifies the mailbox. For example:

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

```yaml
Type: GeneralMailboxOrMailUserIdParameter
Parameter Sets: Identity
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -StoreMailboxIdentity

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The StoreMailboxIdentity parameter specifies the mailbox identity when used with the Database parameter to return statistics for a single mailbox on the specified database. You can use one of the following values:

- MailboxGuid
- LegacyDN

Use this syntax to retrieve information about disconnected mailboxes, which don't have a corresponding Active Directory object or that has a corresponding Active Directory object that doesn't point to the disconnected mailbox in the mailbox database.

```yaml
Type: StoreMailboxIdParameter
Parameter Sets: Database
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Archive

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The Archive switch specifies whether to return mailbox statistics for the archive mailbox that's associated with the mailbox. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CopyOnServer

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The CopyOnServer parameter is used to retrieve statistics from a specific database copy on the specified server.

You can use any value that uniquely identifies the server. For example:

- Name
- FQDN
- Distinguished name (DN)
- Exchange Legacy DN

If you don't use this parameter, the command is run on the local server.

```yaml
Type: ServerIdParameter
Parameter Sets: Database, Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Database

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The Database parameter returns statistics for all mailboxes on the specified database. You can use any value that uniquely identifies the database. For example:

- Name
- Distinguished name (DN)
- GUID

This parameter accepts pipeline input from the Get-MailboxDatabase cmdlet.

```yaml
Type: DatabaseIdParameter
Parameter Sets: Database
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The Filter parameter uses OPATH syntax to filter the results by the specified properties and values. The search criteria uses the syntax `"Property -ComparisonOperator 'Value'"`.

- Enclose the whole OPATH filter in double quotation marks " ". If the filter contains system values (for example, `$true`, `$false`, or `$null`), use single quotation marks ' ' instead. Although this parameter is a string (not a system block), you can also use braces { }, but only if the filter doesn't contain variables.
- Property is a filterable property.
- ComparisonOperator is an OPATH comparison operator (for example `-eq` for equals and `-like` for string comparison). For more information about comparison operators, see [about_Comparison_Operators](https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_comparison_operators).
- Value is the property value to search for. Enclose text values and variables in single quotation marks (`'Value'` or `'$Variable'`). If a variable value contains single quotation marks, you need to identify (escape) the single quotation marks to expand the variable correctly. For example, instead of `'$User'`, use `'$($User -Replace "'","''")'`. Don't enclose integers or system values in quotation marks (for example, use `500`, `$true`, `$false`, or `$null` instead).

You can chain multiple search criteria together using the logical operators `-and` and `-or`. For example, `"Criteria1 -and Criteria2"` or `"(Criteria1 -and Criteria2) -or Criteria3"`.

For detailed information about OPATH filters in Exchange, see [Additional OPATH syntax information](https://learn.microsoft.com/powershell/exchange/recipient-filters#additional-opath-syntax-information).

For example, to display all disconnected mailboxes on a specific mailbox database, use the following syntax: `'DisconnectDate -ne $null'`.

```yaml
Type: String
Parameter Sets: Database, Server
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeMoveHistory

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The IncludeMoveHistory switch specifies whether to return additional information about the mailbox that includes the history of a completed move request, such as status, flags, target database, bad items, start times, end times, duration that the move request was in various stages, and failure codes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeMoveReport

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The IncludeMoveReport switch specifies whether to return a verbose detailed move report for a completed move request, such as server connections and move stages. You don't need to specify a value with this switch.

Because the output of this command is verbose, you should send the output to a .CSV file for easier analysis.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludePassive

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The IncludePassive switch specifies whether to return statistics from all active and passive database copies. You don't need to specify a value with this switch.

If you don't use this switch, the command retrieves statistics from active database copies only.

```yaml
Type: SwitchParameter
Parameter Sets: Server
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeSoftDeletedRecipients

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The IncludeSoftDeletedRecipients switch specifies whether to include soft deleted mailboxes in the results. You don't need to specify a value with this switch.

Soft-deleted mailboxes are deleted mailboxes that are still recoverable.

```yaml
Type: SwitchParameter
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeQuarantineDetails

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The IncludeQuarantineDetails switch specifies whether to return additional quarantine details about the mailbox that aren't otherwise included in the results. You can use these details to determine when and why the mailbox was quarantined. You don't need to specify a value with this switch.

Specifically, this switch returns the values of the QuarantineDescription, QuarantineLastCrash and QuarantineEnd properties on the mailbox. To see these values, you need use a formatting cmdlet. For example, `Get-MailboxStatistics <MailboxIdentity> -IncludeQuarantineDetails | Format-List Quarantine*`.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NoADLookup

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The NoADLookup switch specifies that information is retrieved from the mailbox database, and not from Active Directory. You don't need to specify a value with this switch.

This switch helps improve cmdlet performance when querying a mailbox database that contains a large number of mailboxes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Server

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The Server parameter specifies the server from which you want to obtain mailbox statistics. You can use one of the following values:

- Fully qualified domain name (FQDN)
- NetBIOS name

When you specify a value for the Server parameter, the command returns statistics for all the mailboxes on all the databases, including recovery databases, on the specified server. If you don't specify this parameter, the command returns logon statistics for the local server.

```yaml
Type: ServerIdParameter
Parameter Sets: Server
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -UseCustomRouting

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill UseCustomRouting Description }}

```yaml
Type: SwitchParameter
Parameter Sets: Identity
Aliases:

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
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
