---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online
author: chrisda
external help file: Microsoft.Exchange.ProvisioningAndMigration-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-mailboximportrequeststatistics
schema: 2.0.0
title: Get-MailboxImportRequestStatistics
---

# Get-MailboxImportRequestStatistics

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings might be exclusive to one environment or the other.

Use the Get-MailboxImportRequestStatistics cmdlet to view detailed information about import requests.

This cmdlet is available only in the Mailbox Import Export role, and by default, the role isn't assigned to any role groups. To use this cmdlet, you need to add the Mailbox Import Export role to a role group (for example, to the Organization Management role group). For more information, see [Add a role to a role group](https://learn.microsoft.com/Exchange/permissions/role-groups#add-a-role-to-a-role-group).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### IdentityOnPremises
```
Get-MailboxImportRequestStatistics [-Identity] <MailboxImportRequestIdParameter>
 [-Diagnostic]
 [-DiagnosticArgument <String>]
 [-DomainController <Fqdn>]
 [-IncludeReport]
 [-ReportOnly]
 [<CommonParameters>]
```

### IdentityCloud
```
Get-MailboxImportRequestStatistics [-Identity] <MailboxImportRequestIdParameter>
 [-DiagnosticInfo <String>]
 [-IncludeReport]
 [-IncludeSkippedItems]
 [-ReportOnly]
 [<CommonParameters>]
```

### MigrationMRSInstance
```
Get-MailboxImportRequestStatistics -MRSInstance <Fqdn>
 [-DomainController <Fqdn>]
 [-RequestGuid <Guid>]
 [<CommonParameters>]
```

### MigrationRequestQueue
```
Get-MailboxImportRequestStatistics -RequestQueue <DatabaseIdParameter>
 [-Diagnostic]
 [-DiagnosticArgument <String>]
 [-DomainController <Fqdn>]
 [-IncludeReport]
 [-ReportOnly]
 [-RequestGuid <Guid>]
 [<CommonParameters>]
```

## DESCRIPTION
You can pipeline the Get-MailboxImportRequestStatistics cmdlet from the Get-MailboxImportRequest cmdlet.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-MailboxImportRequestStatistics -Identity Tony\MailboxImport1
```

This example returns the default statistics for the second import request for Tony Smith. The type of information returned by default includes name, mailbox and status.

### Example 2
```powershell
Get-MailboxImportRequestStatistics -Identity Tony\MailboxImport1 | Export-CSV \\SERVER01\ImportRequest_Reports\Tony_Importstats.csv
```

This example returns the detailed statistics for the second import request for Tony Smith's mailbox and exports the report to a .csv file.

### Example 3
```powershell
Get-MailboxImportRequestStatistics -Identity Tony\LegalHold -IncludeReport | Format-List
```

This example returns additional information about the import request for Tony Smith's mailbox by using the IncludeReport parameter and by pipelining the results to the Format-List command.

### Example 4
```powershell
Get-MailboxImportRequestStatistics -MRSInstance CAS01.contoso.com
```

In Exchange Server 2010, this example returns default statistics for an import request that was processed by the instance of MRS running on the server CAS01.

### Example 5
```powershell
Get-MailboxImportRequest -Status Failed | Get-MailboxImportRequestStatistics -IncludeReport | Format-List > AllImportReports.txt
```

This example returns additional information for all the import requests that have a status of Failed by using the IncludeReport parameter, and then saves the information to the text file AllImportReports.txt.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The Identity parameter specifies the identity of the import request. By default, import requests are named `<alias>\MailboxImportX` (where X = 0-9). If you specified a name when you created the import request, use the following syntax: `Alias\Name`.

**Note**: In Exchange Online, the alias of a soft-deleted mailbox might match the alias of an active mailbox. To ensure uniqueness, use the RequestGuid value from the output of the Get-MailboxImportRequest cmdlet for the value of this parameter.

```yaml
Type: MailboxImportRequestIdParameter
Parameter Sets: IdentityOnPremises, IdentityCloud
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -MRSInstance

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The MRSInstance parameter specifies the fully qualified domain name (FQDN) of the Client Access server on which the Microsoft Exchange Mailbox Replication service (MRS) resides. When using this parameter, all records are returned for this instance of MRS.

You can't use this parameter with the Identity or RequestQueue parameters.

```yaml
Type: Fqdn
Parameter Sets: MigrationMRSInstance
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequestQueue

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

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

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Diagnostic

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The Diagnostic switch specifies whether to return extremely detailed information in the results. You don't need to specify a value with this switch.

Typically, you use this switch only at the request of Microsoft Customer Service and Support to troubleshoot problems.

```yaml
Type: SwitchParameter
Parameter Sets: IdentityOnPremises, MigrationRequestQueue
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DiagnosticArgument

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The DiagnosticArgument parameter modifies the results that are returned by using the Diagnostic switch. Typically, you use the Diagnostic switch and the DiagnosticArgument parameter only at the request of Microsoft Customer Service and Support to troubleshoot problems.

```yaml
Type: String
Parameter Sets: IdentityOnPremises, MigrationRequestQueue
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DiagnosticInfo

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

Typically, you use the DiagnosticInfo parameter only at the request of Microsoft Customer Service and Support to troubleshoot problems.

```yaml
Type: String
Parameter Sets: IdentityCloud
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: IdentityOnPremises, MigrationRequestQueue, MigrationMRSInstance
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeReport

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The IncludeReport switch specifies whether to return additional details, which can be used for troubleshooting. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: IdentityOnPremises, IdentityCloud, MigrationRequestQueue
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeSkippedItems

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill IncludeSkippedItems Description }}

```yaml
Type: SwitchParameter
Parameter Sets: IdentityCloud
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequestGuid

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The RequestGuid parameter (together with the RequestQueue parameter) specifies the unique identifier for the import request. To find the import request GUID, use the Get-MailboxImportRequest cmdlet.

You can't use this parameter with the Identity parameter.

```yaml
Type: Guid
Parameter Sets: MigrationMRSInstance, MigrationRequestQueue
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReportOnly

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The ReportOnly switch returns the results as an array of report entries (encoded strings). You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: IdentityOnPremises, IdentityCloud, MigrationRequestQueue
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
