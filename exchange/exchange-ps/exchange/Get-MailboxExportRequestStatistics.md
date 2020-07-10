---
external help file: Microsoft.Exchange.ProvisioningAndMigration-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/get-mailboxexportrequeststatistics
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Get-MailboxExportRequestStatistics
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019"
---

# Get-MailboxExportRequestStatistics

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-MailboxExportRequestStatistics cmdlet to view detailed information about export requests.

This cmdlet is available only in the Mailbox Import Export role, and by default, the role isn't assigned to any role groups. To use this cmdlet, you need to add the Mailbox Import Export role to a role group (for example, to the Organization Management role group). For more information, see [Add a role to a role group](https://docs.microsoft.com/Exchange/permissions/role-groups#add-a-role-to-a-role-group).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Identity
```
Get-MailboxExportRequestStatistics [-Identity] <MailboxExportRequestIdParameter> [-DomainController <Fqdn>]
 [-IncludeReport] [-Diagnostic] [-DiagnosticArgument <String>] [-DiagnosticInfo <String>] [-ReportOnly] [<CommonParameters>]
```

### MRSInstance
```
Get-MailboxExportRequestStatistics -MRSInstance <Fqdn> [-DomainController <Fqdn>] [-RequestGuid <Guid>]
 [<CommonParameters>]
```

### MigrationRequestQueue
```
Get-MailboxExportRequestStatistics -RequestQueue <DatabaseIdParameter> [-DomainController <Fqdn>]
 [-IncludeReport] [-RequestGuid <Guid>] [-Diagnostic] [-DiagnosticArgument <String>] [-ReportOnly]
 [<CommonParameters>]
```

## DESCRIPTION
You can pipeline the Get-MailboxExportRequestStatistics cmdlet from the Get-MailboxExportRequest cmdlet.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-MailboxExportRequestStatistics -Identity Tony\MailboxExport1
```

This example returns the default statistics for the second export request for Tony Smith. The type of information returned by default includes name, mailbox, and status.

### Example 2
```powershell
Get-MailboxExportRequestStatistics -Identity Tony\MailboxExport | Export-CSV \\SERVER01\ExportRequest_Reports\Tony_Exportstats.csv
```

This example returns statistics for Tony Smith's mailbox and exports the report to a .csv file.

### Example 3
```powershell
Get-MailboxExportRequestStatistics -Identity Tony\LegalHold -IncludeReport | Format-List
```

This example returns additional information about the export request for Tony Smith's mailbox by using the IncludeReport parameter and by pipelining the results to the Format-List command. (The export request was created using the New-MailboxExportRequest.)

### Example 4
```powershell
Get-MailboxExportRequestStatistics -MRSInstance CAS01.contoso.com
```

In Exchange Server 2010, this example returns default statistics for an export request being processed by the instance of MRS running on the server CAS01. This command only returns information for export requests that are currently being processed by an instance of MRS. If the request is already finished, it won't be returned.

### Example 5
```powershell
Get-MailboxExportRequestStatistics -RequestQueue MailboxDatabase01
```

This example returns default statistics for an export request being processed by the instance of MRS running on the server CAS01. This command only returns information for export requests currently being processed by an instance of MRS. If the request is already finished, it won't be returned.

### Example 6
```powershell
Get-MailboxExportRequest -Status Failed | Get-MailboxExportRequestStatistics -IncludeReport | Format-List > AllExportReports.txt
```

This example returns additional information for all the export requests that have a status of Failed by using the IncludeReport parameter, and then saves the information to the text file AllExportReports.txt.

## PARAMETERS

### -Identity
The Identity parameter specifies the identity of the export request. By default, export requests are named \<alias\>\\MailboxExportX (where X = 0-9). If you specified a name for the export request when it was created by using the New-MailboxExportRequest cmdlet, use the following syntax: \<alias\>\\\<name\>.

This parameter can't be used with the RequestGuid or RequestQueue parameters.

```yaml
Type: MailboxExportRequestIdParameter
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -MRSInstance
This parameter is available or functional only in Exchange Server 2010.

The MRSInstance parameter specifies the fully qualified domain name (FQDN) of the Client Access server on which the Microsoft Exchange Mailbox Replication service (MRS) resides. When using this parameter, all records are returned for this instance of MRS.

You can't use this parameter with the Identity or RequestQueue parameters.

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

### -RequestQueue
This parameter is for debugging purposes only.

The RequestQueue parameter identifies the request based on the mailbox database where the request is being run. You can use any value that uniquely identifies the database. For example:

- Name

- Distinguished name (DN)

- GUID

You can't use this parameter with the Identity parameter.

```yaml
Type: DatabaseIdParameter
Parameter Sets: MigrationRequestQueue
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Diagnostic
The Diagnostic switch specifies whether to return extremely detailed information in the results. Typically, you use this switch only at the request of Microsoft Customer Service and Support to troubleshoot problems.

```yaml
Type: SwitchParameter
Parameter Sets: Identity, MigrationRequestQueue
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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
Parameter Sets: Identity, MigrationRequestQueue
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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

### -IncludeReport
The IncludeReport switch specifies whether to return additional details, which can be used for troubleshooting.

```yaml
Type: SwitchParameter
Parameter Sets: Identity, MigrationRequestQueue
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReportOnly
The ReportOnly switch returns the results as an array of report entries (encoded strings). You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Identity, MigrationRequestQueue
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequestGuid
The RequestGuid parameter specifies the unique identifier for the export request. To find the export request GUID, use the Get-MailboxExportRequest cmdlet. If you specify the RequestGuid parameter, you must also specify the RequestQueue parameter. You can't use this parameter with the Identity parameter.

```yaml
Type: Guid
Parameter Sets: MRSInstance, MigrationRequestQueue
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
