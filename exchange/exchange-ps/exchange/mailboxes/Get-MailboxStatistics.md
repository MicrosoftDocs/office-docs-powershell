---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: Get-MailboxStatistics
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019 || exchonline-ps"
---

# Get-MailboxStatistics

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-MailboxStatistics cmdlet to obtain information about a mailbox, such as the size of the mailbox, the number of messages it contains, and the last time it was accessed. In addition, you can get the move history or a move report of a completed move request.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set2
```
Get-MailboxStatistics -Database <DatabaseIdParameter> [-DomainController <Fqdn>]
 [[-Identity] <GeneralMailboxOrMailUserIdParameter>] [-AuditLog] [-IncludeMoveHistory] [-IncludeMoveReport]
 [-IncludeQuarantineDetails] [-NoADLookup] [<CommonParameters>]
```

### Set1
```
Get-MailboxStatistics [-Identity] <GeneralMailboxOrMailUserIdParameter> [-Archive] [-DomainController <Fqdn>]
 [-IncludeMoveHistory] [-IncludeMoveReport] [-CopyOnServer <ServerIdParameter>] [-IncludeQuarantineDetails]
 [-NoADLookup] [<CommonParameters>]
```

### Set3
```
Get-MailboxStatistics -Server <ServerIdParameter> [-DomainController <Fqdn>]
 [[-StoreMailboxIdentity] <StoreMailboxIdParameter>] -Database <DatabaseIdParameter>
 [-CopyOnServer <ServerIdParameter>] [-Filter <String>] [-IncludeMoveHistory] [-IncludeMoveReport]
 [-IncludeQuarantineDetails] [-NoADLookup] [<CommonParameters>]
```

### Set4
```
Get-MailboxStatistics -Server <ServerIdParameter> [-DomainController <Fqdn>] [-Filter <String>]
 [-IncludeMoveHistory] [-IncludeMoveReport] [-IncludePassive] [-IncludeQuarantineDetails] [-NoADLookup]
 [<CommonParameters>]
```

## DESCRIPTION
On Mailbox servers only, you can use the Get-MailboxStatistics cmdlet without parameters. In this case, the cmdlet returns the statistics for all mailboxes on all databases on the local server.

The Get-MailboxStatistics cmdlet requires at least one of the following parameters to complete successfully: Server, Database or Identity.

You can use the Get-MailboxStatistics cmdlet to return detailed move history and a move report for completed move requests to troubleshoot a move request. To view the move history, you must pass this cmdlet as an object. Move histories are retained in the mailbox database and are numbered incrementally and the last executed move request is always numbered 0. For more information, see "Example 7," "Example 8," and "Example 9" in this topic.

You can only see move reports and move history for completed move requests.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-MailboxStatistics -Identity AylaKol
```

This example retrieves the mailbox statistics for the mailbox of the user Ayla Kol by using its associated alias AylaKol.

### -------------------------- Example 2 --------------------------
```
Get-MailboxStatistics -Server MailboxServer01
```

This example retrieves the mailbox statistics for all mailboxes on the server MailboxServer01.

### -------------------------- Example 3 --------------------------
```
Get-MailboxStatistics -Identity contoso\chris
```

This example retrieves the mailbox statistics for the specified mailbox.

### -------------------------- Example 4 --------------------------
```
Get-MailboxStatistics -Database "Mailbox Database"
```

This example retrieves the mailbox statistics for all mailboxes in the specified mailbox database.

### -------------------------- Example 5 --------------------------
```
Get-MailboxDatabase | Get-MailboxStatistics -Filter 'DisconnectDate -ne $null'
```

This example retrieves the mailbox statistics for the disconnected mailboxes for all mailbox databases in the organization. The -ne operator means not equal.

### -------------------------- Example 6 --------------------------
```
Get-MailboxStatistics -Database "Mailbox Database" -StoreMailboxIdentity 3b475034-303d-49b2-9403-ae022b43742d
```

This example retrieves the mailbox statistics for a single disconnected mailbox. The value for the StoreMailboxIdentity parameter is the mailbox GUID of the disconnected mailbox. You can also use the LegacyDN.

### -------------------------- Example 7 --------------------------
```
Get-MailboxStatistics -Identity AylaKol -IncludeMoveHistory | Format-List
```

This example returns the summary move history for the completed move request for Ayla Kol's mailbox. If you don't pipeline the output to the Format-List cmdlet, the move history doesn't display.

### -------------------------- Example 8 --------------------------
```
$temp=Get-MailboxStatistics -Identity AylaKol -IncludeMoveHistory; $temp.MoveHistory[0]
```

This example returns the detailed move history for the completed move request for Ayla Kol's mailbox. This example uses a temporary variable to store the mailbox statistics object. If the mailbox has been moved multiple times, there are multiple move reports. The last move report is always MoveReport[0].

### -------------------------- Example 9 --------------------------
```
$temp=Get-MailboxStatistics -Identity AylaKol -IncludeMoveReport; $temp.MoveHistory[0] | Export-CSV C:\MoveReport_AylaKol.csv
```

This example returns the detailed move history and a verbose detailed move report for Ayla Kol's mailbox. This example uses a temporary variable to store the move request statistics object and outputs the move report to a CSV file.

## PARAMETERS

### -Database
This parameter is available only in on-premises Exchange.

The Database parameter specifies the name of the mailbox database. When you specify a value for the Database parameter, the Exchange Management Shell returns statistics for all the mailboxes on the database specified.

You can use the following values:

- GUID

- Database

This parameter accepts pipeline input from the Get-MailboxDatabase cmdlet.

```yaml
Type: DatabaseIdParameter
Parameter Sets: Set2, Set3
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the mailbox that you want to return statistics for. You can use any value that uniquely identifies the mailbox.

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
Type: GeneralMailboxOrMailUserIdParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

```yaml
Type: GeneralMailboxOrMailUserIdParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Server
This parameter is available only in on-premises Exchange.

The Server parameter specifies the server from which you want to obtain mailbox statistics. You can use one of the following values:

- Fully qualified domain name (FQDN)

- NetBIOS name

When you specify a value for the Server parameter, the command returns statistics for all the mailboxes on all the databases, including recovery databases, on the specified server. If you don't specify this parameter, the command returns logon statistics for the local server.

```yaml
Type: ServerIdParameter
Parameter Sets: Set3, Set4
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Archive
The Archive switch parameter specifies whether to return mailbox statistics for the archive mailbox associated with the specified mailbox.

You don't have to specify a value with this parameter.

```yaml
Type: SwitchParameter
Parameter Sets: Set1
Aliases:
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

### -IncludeMoveHistory
The IncludeMoveHistory switch specifies whether to return additional information about the mailbox that includes the history of a completed move request, such as status, flags, target database, bad items, start times, end times, duration that the move request was in various stages, and failure codes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeMoveReport
The IncludeMoveReport switch specifies whether to return a verbose detailed move report for a completed move request, such as server connections and move stages.

Because the output of this command is verbose, you should send the output to a .CSV file for easier analysis.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AuditLog
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CopyOnServer
This parameter is available only in on-premises Exchange.

The CopyOnServer parameter is used to retrieve statistics from a specific database copy on the server specified with the Server parameter.

```yaml
Type: ServerIdParameter
Parameter Sets: Set1, Set3
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
This parameter is available only in on-premises Exchange.

The Filter parameter specifies a filter to filter the results of the Get-MailboxStatistics cmdlet. For example, to display all disconnected mailboxes on a specific mailbox database, use the following syntax for this parameter: -Filter 'DisconnectDate -ne $null'

```yaml
Type: String
Parameter Sets: Set3, Set4
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludePassive
This parameter is available only in on-premises Exchange.

Without the IncludePassive parameter, the cmdlet retrieves statistics from active database copies only. Using the IncludePassive parameter, you can have the cmdlet return statistics from all active and passive database copies.

```yaml
Type: SwitchParameter
Parameter Sets: Set4
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeQuarantineDetails
This parameter is available only in on-premises Exchange.

The IncludeQuarantineDetails switch specifies whether to return additional quarantine details about the mailbox that aren't otherwise included in the results. You can use these details to determine when and why the mailbox was quarantined.

Specifically, this switch returns the values of the QuarantineDescription, QuarantineLastCrash and QuarantineEnd properties on the mailbox. To see these values, you need use a formatting cmdlet. For example, Get-MailboxStatistics \<MailboxIdentity\> -IncludeQuarantineDetails | Format-List Quarantine\*.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NoADLookup
This parameter is available only in on-premises Exchange.

The NoADLookup switch specifies that information is retrieved from the mailbox database, and not from Active Directory. This helps improve cmdlet performance when querying a mailbox database that contains a large number of mailboxes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StoreMailboxIdentity
This parameter is available only in on-premises Exchange.

The StoreMailboxIdentity parameter specifies the mailbox identity when used with the Database parameter to return statistics for a single mailbox on the specified database. You can use one of the following values:

- MailboxGuid

- LegacyDN

Use this syntax to retrieve information about disconnected mailboxes, which don't have a corresponding Active Directory object or that has a corresponding Active Directory object that doesn't point to the disconnected mailbox in the mailbox database.

```yaml
Type: StoreMailboxIdParameter
Parameter Sets: Set3
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: 1
Default value: None
Accept pipeline input: True
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

[Online Version](https://technet.microsoft.com/library/cec76f70-941f-4bc9-b949-35dcc7671146.aspx)
