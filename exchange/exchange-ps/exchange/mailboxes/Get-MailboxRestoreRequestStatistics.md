---
external help file: Microsoft.Exchange.ProvisioningAndMigration-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
title: Get-MailboxRestoreRequestStatistics
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchonline-ps"
---

# Get-MailboxRestoreRequestStatistics

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-MailboxRestoreRequestStatistics cmdlet to view detailed information about restore requests.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set1
```
Get-MailboxRestoreRequestStatistics [-Identity] <MailboxRestoreRequestIdParameter> [-DomainController <Fqdn>]
 [-IncludeReport] [-Diagnostic] [-DiagnosticArgument <String>] [-ReportOnly] [<CommonParameters>]
```

### Set3
```
Get-MailboxRestoreRequestStatistics -MRSInstance <Fqdn> [-DomainController <Fqdn>] [-RequestGuid <Guid>]
 [<CommonParameters>]
```

### Set2
```
Get-MailboxRestoreRequestStatistics -RequestQueue <DatabaseIdParameter> [-DomainController <Fqdn>]
 [-IncludeReport] [-RequestGuid <Guid>] [-Diagnostic] [-DiagnosticArgument <String>] [-ReportOnly]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-MailboxRestoreRequestStatistics -Identity "Tony\MailboxRestore1"
```

This example returns the default statistics for the restore request with the identity Tony\\MailboxRestore1. The type of information returned by default includes name, mailbox, status and percent complete.

### -------------------------- Example 2 --------------------------
```
Get-MailboxRestoreRequestStatistics -Identity Tony\MailboxRestore | Export-CSV \\SERVER01\RestoreRequest_Reports\Tony_Restorestats.csv
```

This example returns the statistics for Tony Smith's mailbox and exports the report to a CSV file.

### -------------------------- Example 3 --------------------------
```
Get-MailboxRestoreRequestStatistics -Identity Tony\MailboxRestore -IncludeReport | Format-List
```

This example returns additional information about the restore request for Tony Smith's mailbox by using the IncludeReport parameter and by pipelining the results to the Format-List command.

### -------------------------- Example 4 --------------------------
```
Get-MailboxRestoreRequestStatistics -MRSInstance CAS01.contoso.com
```

In Exchange Server 2010 and 2013, this example returns default statistics for a restore request being processed by the instance of MRS running on the server CAS01. This command only returns information for restore requests currently being processed by an instance of MRS. If the Client Access server is finished processing all restore requests, no information is returned. This command is for debugging purposes only and should only be performed if requested by support personnel.

### -------------------------- Example 5 --------------------------
```
Get-MailboxRestoreRequest -Status Failed | Get-MailboxRestoreRequestStatistics -IncludeReport | Format-List > C:\Reports\AllRestoreReports.txt
```

This example returns additional information for all the restore requests that have a status of Failed by using the IncludeReport parameter and then saves the information to the text file C:\\Reports\\AllRestoreReports.txt.

## PARAMETERS

### -Identity
The Identity parameter specifies the identity of the restore request. The Identity parameter consists of the alias of the mailbox to be restored and the name that was specified when the restore request was created. The identity of the restore request uses the following syntax: \<alias\>\\\<name\>.

If you didn't specify a name for the restore request when it was created, Exchange automatically generated the default name MailboxRestore. Exchange generates up to 10 names, starting with MailboxRestore and then MailboxRestoreX (where X = 1-9).

This parameter can't be used in conjunction with the MRSInstance or RequestQueue parameters.

```yaml
Type: MailboxRestoreRequestIdParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -MRSInstance
This parameter is available or functional only in Exchange Server 2010.

The MRSInstance parameter specifies the fully qualified domain name (FQDN) of the Client Access server on which the Microsoft Exchange Mailbox Replication service (MRS) resides. When using this parameter, all records are returned for this instance of MRS.

This parameter can't be used in conjunction with the Identity or RequestQueue parameters.

```yaml
Type: Fqdn
Parameter Sets: Set3
Aliases:
Applicable: Exchange Server 2010
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequestQueue
This parameter is available only in on-premises Exchange.

The RequestQueue parameter identifies the request based on the mailbox database where the request is being run. You can use any value that uniquely identifies the database. For example:

- Database GUID

- Database name

You can't use this parameter with the Identity parameter.

```yaml
Type: DatabaseIdParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: True
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
The IncludeReport switch specifies whether to return additional details, which can be used for troubleshooting.

```yaml
Type: SwitchParameter
Parameter Sets: Set1, Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequestGuid
This parameter is available only in on-premises Exchange.

The RequestGuid parameter specifies the unique identifier for the restore request. To find the GUID, use the Get-MailboxRestoreRequest cmdlet.

```yaml
Type: Guid
Parameter Sets: Set3, Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Diagnostic
The Diagnostic switch specifies whether to return extremely detailed information in the results. Typically, you use this switch only at the request of Microsoft Customer Service and Support to troubleshoot problems.

```yaml
Type: SwitchParameter
Parameter Sets: Set1, Set2
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DiagnosticArgument
The DiagnosticArgument parameter modifies the results that are returned by using the Diagnostic switch. Typically, you use the Diagnostic switch and the DiagnosticArgument parameter only at the request of Microsoft Customer Service and Support to troubleshoot problems.

```yaml
Type: String
Parameter Sets: Set1, Set2
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DiagnosticInfo
This parameter is available only in Exchange Online.

The DiagnosticInfo parameter modifies the results that are returned by using the Diagnostic switch. You don't need to specify a value with this switch.

Typically, you use the DiagnosticInfo parameter only at the request of Microsoft Customer Service and Support to troubleshoot problems.

```yaml
Type:	String
Position:	Named
Default value:	None
Accept pipeline input:	False
Accept wildcard characters:	False
Applies to:	Exchange Online
```

### -ReportOnly
The ReportOnly switch returns the results as an array of report entries. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Set1, Set2
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

[Online Version](https://technet.microsoft.com/library/b28d5835-1f8f-4cd9-8f72-9d592adef3d9.aspx)
