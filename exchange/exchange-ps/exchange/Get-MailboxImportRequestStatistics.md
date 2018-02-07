---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Get-MailboxImportRequestStatistics

## SYNOPSIS
!!! Exchange Server 2010

Use the Get-MailboxImportRequestStatistics cmdlet to view detailed information about import requests.

!!! Exchange Server 2013

This cmdlet is available only in on-premises Exchange.

Use the Get-MailboxImportRequestStatistics cmdlet to view detailed information about import requests.

This cmdlet is available only in the Mailbox Import Export role, and by default, that role isn't assigned to a role group. To use this cmdlet, you need to add the Mailbox Import Export role to a role group (for example, to the Organization Management role group). For more information, see the "Add a role to a role group" section in Manage role groups.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016, Exchange Online

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-MailboxImportRequestStatistics cmdlet to view detailed information about import requests.

This cmdlet is available only in the Mailbox Import Export role, and by default, that role isn't assigned to a role group. To use this cmdlet, you need to add the Mailbox Import Export role to a role group (for example, to the Organization Management role group). For more information, see the "Add a role to a role group" section in Manage role groups (https://technet.microsoft.com/library/jj657480.aspx).

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set1
```
Get-MailboxImportRequestStatistics [-Identity] <MailboxImportRequestIdParameter> [-DomainController <Fqdn>]
 [-IncludeReport] [-Diagnostic] [-DiagnosticArgument <String>] [-ReportOnly] [<CommonParameters>]
```

### Set3
```
Get-MailboxImportRequestStatistics -MRSInstance <Fqdn> [-DomainController <Fqdn>] [-RequestGuid <Guid>]
 [<CommonParameters>]
```

### Set2
```
Get-MailboxImportRequestStatistics -RequestQueue <DatabaseIdParameter> [-DomainController <Fqdn>]
 [-IncludeReport] [-RequestGuid <Guid>] [-Diagnostic] [-DiagnosticArgument <String>] [-ReportOnly]
 [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

You can pipeline the Get-MailboxImportRequestStatistics cmdlet from the Get-MailboxImportRequest cmdlet.

The RequestQueue and MRSInstance parameter syntax sets are for debugging purposes only.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Import Export" entry in the Mailbox Permissions topic.

!!! Exchange Server 2013

You can pipeline the Get-MailboxImportRequestStatistics cmdlet from the Get-MailboxImportRequest cmdlet.

The RequestQueue parameter syntax set is for debugging purposes only.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Import Export" entry in the Recipients Permissions topic.

!!! Exchange Server 2016, Exchange Online

You can pipeline the Get-MailboxImportRequestStatistics cmdlet from the Get-MailboxImportRequest cmdlet.

The RequestQueue parameter syntax set is for debugging purposes only.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Get-MailboxImportRequestStatistics -Identity Tony\MailboxImport1
```

This example returns the default statistics for the second import request for Tony Smith. The type of information returned by default includes name, mailbox, and status.

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-MailboxImportRequestStatistics -Identity Tony\MailboxImport1
```

This example returns the default statistics for the second import request for Tony Smith. The type of information returned by default includes name, mailbox, and status.

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-MailboxImportRequestStatistics -Identity Tony\MailboxImport1
```

This example returns the default statistics for the second import request for Tony Smith. The type of information returned by default includes name, mailbox, and status.

### Example 1 -------------------------- (Exchange Online)
```
Get-MailboxImportRequestStatistics -Identity Tony\MailboxImport1
```

This example returns the default statistics for the second import request for Tony Smith. The type of information returned by default includes name, mailbox, and status.

### Example 2 -------------------------- (Exchange Server 2010)
```
Get-MailboxImportRequestStatistics -Identity Tony\MailboxImport1 | Export-CSV \\SERVER01\ImportRequest_Reports\Tony_Importstats.csv
```

This example returns the detailed statistics for the second import request for Tony Smith's mailbox and exports the report to a CSV file.

### Example 2 -------------------------- (Exchange Server 2013)
```
Get-MailboxImportRequestStatistics -Identity Tony\MailboxImport1 | Export-CSV \\SERVER01\ImportRequest_Reports\Tony_Importstats.csv
```

This example returns the detailed statistics for the second import request for Tony Smith's mailbox and exports the report to a .csv file.

### Example 2 -------------------------- (Exchange Server 2016)
```
Get-MailboxImportRequestStatistics -Identity Tony\MailboxImport1 | Export-CSV \\SERVER01\ImportRequest_Reports\Tony_Importstats.csv
```

This example returns the detailed statistics for the second import request for Tony Smith's mailbox and exports the report to a .csv file.

### Example 2 -------------------------- (Exchange Online)
```
Get-MailboxImportRequestStatistics -Identity Tony\MailboxImport1 | Export-CSV \\SERVER01\ImportRequest_Reports\Tony_Importstats.csv
```

This example returns the detailed statistics for the second import request for Tony Smith's mailbox and exports the report to a .csv file.

### Example 3 -------------------------- (Exchange Server 2010)
```
Get-MailboxImportRequestStatistics -Identity Tony\LegalHold -IncludeReport | Format-List
```

This example returns additional information about the import request for Tony Smith's mailbox by using the IncludeReport parameter and by pipelining the results to the Format-List command.

### Example 3 -------------------------- (Exchange Server 2013)
```
Get-MailboxImportRequestStatistics -Identity Tony\LegalHold -IncludeReport | Format-List
```

This example returns additional information about the import request for Tony Smith's mailbox by using the IncludeReport parameter and by pipelining the results to the Format-List command.

### Example 3 -------------------------- (Exchange Server 2016)
```
Get-MailboxImportRequestStatistics -Identity Tony\LegalHold -IncludeReport | Format-List
```

This example returns additional information about the import request for Tony Smith's mailbox by using the IncludeReport parameter and by pipelining the results to the Format-List command.

### Example 3 -------------------------- (Exchange Online)
```
Get-MailboxImportRequestStatistics -Identity Tony\LegalHold -IncludeReport | Format-List
```

This example returns additional information about the import request for Tony Smith's mailbox by using the IncludeReport parameter and by pipelining the results to the Format-List command.

### Example 4 -------------------------- (Exchange Server 2010)
```
Get-MailboxImportRequestStatistics -MRSInstance CAS01.contoso.com
```

This example returns default statistics for an import request that was processed by the instance of MRS running on the server CAS01.

### Example 4 -------------------------- (Exchange Server 2013)
```
Get-MailboxImportRequest -Status Failed | Get-MailboxImportRequestStatistics -IncludeReport | Format-List > AllImportReports.txt
```

This example returns additional information for all the import requests that have a status of Failed by using the IncludeReport parameter, and then saves the information to the text file AllImportReports.txt.

### Example 4 -------------------------- (Exchange Server 2016)
```
Get-MailboxImportRequest -Status Failed | Get-MailboxImportRequestStatistics -IncludeReport | Format-List > AllImportReports.txt
```

This example returns additional information for all the import requests that have a status of Failed by using the IncludeReport parameter, and then saves the information to the text file AllImportReports.txt.

### Example 4 -------------------------- (Exchange Online)
```
Get-MailboxImportRequest -Status Failed | Get-MailboxImportRequestStatistics -IncludeReport | Format-List > AllImportReports.txt
```

This example returns additional information for all the import requests that have a status of Failed by using the IncludeReport parameter, and then saves the information to the text file AllImportReports.txt.

### Example 5 -------------------------- (Exchange Server 2010)
```
Get-MailboxImportRequest -Status Failed | Get-MailboxImportRequestStatistics -IncludeReport | Format-List > AllImportReports.txt
```

This example returns additional information for all the import requests that have a status of Failed by using the IncludeReport parameter, and then saves the information to the text file AllImportReports.txt.

## PARAMETERS

### -Identity
The Identity parameter specifies the identity of the import request. By default, import requests are named \<alias\>\\MailboxImportX (where X = 0-9). If you specified a name when you created the import request, use the following syntax: \<alias\>\\\<name\>.

```yaml
Type: MailboxImportRequestIdParameter
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
!!! Exchange Server 2010

The RequestQueue parameter specifies the mailbox database on which the mailbox or archive of the request resides. You can use one of the following values:

- GUID of the database

- Database name

This parameter can't be used in conjunction with the Identity or MRSInstance parameters.



!!! Exchange Server 2013

The RequestQueue parameter identifies the request based on the mailbox database where the request is being run. You can use any value that uniquely identifies the database. For example:

- Database GUID

- Database name

You can't use this parameter with the Identity parameter.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The RequestQueue parameter identifies the request based on the mailbox database where the request is being run. You can use any value that uniquely identifies the database. For example:

- Database GUID

- Database name

You can't use this parameter with the Identity parameter.



```yaml
Type: DatabaseIdParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
!!! Exchange Server 2010, Exchange Server 2013

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeReport
!!! Exchange Server 2010

The IncludeReport switch specifies whether to return additional details about the request, which can be used for troubleshooting.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010, Exchange Server 2013

The RequestGuid parameter specifies the unique identifier for the import request. To find the import request GUID, use the Get-MailboxImportRequest cmdlet. If you specify the RequestGuid parameter, you must also specify the RequestQueue parameter. You can't use this parameter in conjunction with the Identity parameter.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The RequestGuid parameter (together with the RequestQueue parameter) specifies the unique identifier for the import request. To find the import request GUID, use the Get-MailboxImportRequest cmdlet.

You can't use this parameter with the Identity parameter.



```yaml
Type: Guid
Parameter Sets: Set3, Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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

[Online Version](https://technet.microsoft.com/library/678ffbbb-469d-4681-ba2e-33d4e0afe94f.aspx)

