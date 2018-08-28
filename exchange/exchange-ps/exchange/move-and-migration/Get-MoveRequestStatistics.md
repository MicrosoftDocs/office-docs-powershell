---
external help file: Microsoft.Exchange.ProvisioningAndMigration-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: Get-MoveRequestStatistics
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019 || exchonline-ps"
---

# Get-MoveRequestStatistics

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-MoveRequestStatistics cmdlet to view detailed information about move requests.

Some of the failure messages that are returned by this cmdlet are temporary and don't indicate that a request has actually failed. If the Status value is Queued or InProgress, then the request is proceeding normally.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Identity
```
Get-MoveRequestStatistics [-Identity] <MoveRequestIdParameter> [-Diagnostic] [-DiagnosticArgument <String>]
 [-DiagnosticInfo <String>] [-DomainController <Fqdn>] [-IncludeReport] [-ProxyToMailbox <MailboxIdParameter>]
 [-ReportOnly] [<CommonParameters>]
```

### MigrationMoveRequestQueue
```
Get-MoveRequestStatistics -MoveRequestQueue <DatabaseIdParameter> [-Diagnostic] [-DiagnosticArgument <String>]
 [-DomainController <Fqdn>] [-IncludeReport] [-MailboxGuid <Guid>] [-ReportOnly] [<CommonParameters>]
```

### MRSInstance
```
Get-MoveRequestStatistics -MRSInstance <Fqdn> [-DomainController <Fqdn>] [-MailboxGuid <Guid>]
 [<CommonParameters>]
```

## DESCRIPTION
The MoveRequestQueue parameter syntax set is for debugging purposes only.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-MoveRequestStatistics -Identity Tony@contoso.com
```

This example returns the default statistics for Tony Smith's mailbox, which include the status, mailbox size, archive mailbox size, and the percentage complete.

### -------------------------- Example 2 --------------------------
```
Get-MoveRequestStatistics -Identity "contoso\tony" | Format-List
```

This example returns the detailed statistics for Tony Smith's mailbox by pipelining the results to the Format-List command.

### -------------------------- Example 3 --------------------------
```
Get-MoveRequestStatistics -Identity Tony@contoso.com -IncludeReport | Export-CSV C:\MRStats.csv
```

This example returns additional information about the mailbox move for Tony Smith's mailbox and exports the report to a .csv file.

### -------------------------- Example 4 --------------------------
```
Get-MoveRequestStatistics -MoveRequestQueue "MBXDB02"
```

This example returns default statistics for all mailboxes whose move requests are in progress or haven't been cleared for the database MBXDB02.

### -------------------------- Example 5 --------------------------
```
Get-MoveRequestStatistics -MRSInstance CAS01.contoso.com -MailboxGuid b6a6795c-a010-4f67-aaaa-da372d56fcb9
```

In Exchange Server 2010, this example returns default statistics for a mailbox that has been moved by the instance of the Microsoft Exchange Mailbox Replication service running on the server CAS01.

## PARAMETERS

### -Identity
The Identity parameter specifies the identity of the mailbox or mail user. You can use one of the following values:

- GUID

- Distinguished name (DN)

- Domain\\Account

- User principal name (UPN)

- Legacy Exchange DN

- SMTP address

- Alias

You can use this parameter with the MoveRequestQueue or MailboxGuid parameters.

```yaml
Type: MoveRequestIdParameter
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -MoveRequestQueue
This parameter is available only in on-premises Exchange.

The MoveRequestQueue parameter specifies the mailbox database on which the move request resides. You can use one of the following values:

- GUID of the database

- Database name

You can't use this parameter with the Identity or MRSInstance parameters.

```yaml
Type: DatabaseIdParameter
Parameter Sets: MigrationMoveRequestQueue
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MRSInstance
This parameter is available only in on-premises Exchange 2010.

The MRSInstance parameter specifies the fully qualified domain name (FQDN) of the Client Access server on which the Microsoft Exchange Mailbox Replication service (MRS) resides. When using this parameter, all records are returned for this instance of MRS.

You can use this parameter with the Identity or MoveRequestQueue parameters.

```yaml
Type: Fqdn
Parameter Sets: MRSInstance
Aliases:
Applicable: Exchange Server 2010
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Diagnostic
This parameter is available only in on-premises Exchange.

The Diagnostic switch specifies whether to return extremely detailed information in the results. You don't need to specify a value with this switch.

Typically, you use this switch only at the request of Microsoft Customer Service and Support to troubleshoot problems.

```yaml
Type: SwitchParameter
Parameter Sets: Identity, MigrationMoveRequestQueue
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DiagnosticArgument
This parameter is available only in on-premises Exchange.

The DiagnosticArgument parameter modifies the results that are returned by using the Diagnostic switch. You don't need to specify a value with this switch.

Typically, you use the Diagnostic switch and the DiagnosticArgument parameter only at the request of Microsoft Customer Service and Support to troubleshoot problems.

```yaml
Type: String
Parameter Sets: Identity, MigrationMoveRequestQueue
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DiagnosticInfo
This parameter is available only in the cloud-based service.

Typically, you use the DiagnosticInfo parameter only at the request of Microsoft Customer Service and Support to troubleshoot problems.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
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

### -IncludeReport
The IncludeReport switch specifies whether to return additional details, which can be used for troubleshooting. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Identity, MigrationMoveRequestQueue
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailboxGuid
This parameter is available only in on-premises Exchange.

The MailboxGuid parameter specifies the GUID of a mailbox for which you want to view the move request statistics.

You can't use this parameter with the Identity parameter.

```yaml
Type: Guid
Parameter Sets: MigrationMoveRequestQueue, MRSInstance
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProxyToMailbox
This parameter is available only in the cloud-based service.

The ProxyToMailbox parameter filters the results by the location of the specified mailbox (also known as proxying). You can use any value that uniquely identifies the mailbox.

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
Type: MailboxIdParameter
Parameter Sets: Identity, MigrationMoveRequestQueue
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReportOnly
The ReportOnly switch returns the results as an array of report entries. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Identity, MigrationMoveRequestQueue
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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/1baf0fd7-40e1-4d91-bab7-beff28b89e99.aspx)
