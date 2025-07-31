---
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
author: chrisda
external help file: Microsoft.Exchange.ProvisioningAndMigration-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-publicfoldermigrationrequeststatistics
schema: 2.0.0
title: Get-PublicFolderMigrationRequestStatistics
---

# Get-PublicFolderMigrationRequestStatistics

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-PublicFolderMigrationRequestStatistics cmdlet to view detailed information about serial public folder migration requests (requests created by the New-PublicFolderMigrationRequest cmdlet).

**Note**: Support for serial migration of public folders ended in Exchange 2013 Cumulative Update 8 (CU8), and the cmdlets are no longer available in Exchange Online. Instead, use the corresponding **\*-MigrationBatch** and **\*-PublicFolderMailboxMigration\*** cmdlets.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Identity
```
Get-PublicFolderMigrationRequestStatistics [-Identity] <PublicFolderMigrationRequestIdParameter>
 [-Diagnostic]
 [-Diagnostic <String>]
 [-DiagnosticArgument <String>]
 [-DomainController <Fqdn>]
 [-IncludeReport]
 [-ReportOnly]
 [<CommonParameters>]
```

### MigrationRequestQueue
```
Get-PublicFolderMigrationRequestStatistics -RequestQueue <DatabaseIdParameter>
 [-RequestGuid <Guid>]
 [-Diagnostic]
 [-DiagnosticArgument <String>]
 [-DomainController <Fqdn>]
 [-IncludeReport]
 [-ReportOnly]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-PublicFolderMigrationRequestStatistics -RequestQueue "MBXDB02"
```

This example returns default statistics for all migration requests that are in progress or haven't been cleared for the database MBXDB02.

### Example 2
```powershell
Get-PublicFolderMigrationRequestStatistics -Identity "PFMigrate_MarketingReports" -IncludeReport | Export-CSV C:\PFMigstats.csv
```

This example returns additional information about the migration request and exports the report to a CSV file.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Identity parameter specifies the migration request that you want to view. You can use the following values:

- Name
- RequestGUID

You can't use this parameter with the RequestQueue or RequestGuid parameter.

```yaml
Type: PublicFolderMigrationRequestIdParameter
Parameter Sets: Identity
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -RequestQueue

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is for debugging purposes only.

The RequestQueue parameter filters the results by the mailbox database where the request is being run. You can use any value that uniquely identifies the database. For example:

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

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Diagnostic switch specifies whether to return extremely detailed information in the results. You don't need to specify a value with this switch.

Typically, you use this switch only at the request of Microsoft Customer Service and Support to troubleshoot problems.

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

### -DiagnosticArgument

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The DiagnosticArgument parameter modifies the results that are returned by using the Diagnostic switch. Typically, you use the Diagnostic switch and the DiagnosticArgument parameter only at the request of Microsoft Customer Service and Support to troubleshoot problems.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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

### -IncludeReport

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The IncludeReport switch specifies whether to return additional details, which can be used for troubleshooting. You don't need to specify a value with this switch.

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

### -ReportOnly

> Applicable: Exchange Server 2016, Exchange Server 2019

The ReportOnly switch returns the results as an array of report entries (encoded strings). You don't need to specify a value with this switch.

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

### -RequestGuid

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The RequestGuid parameter specifies the GUID of a migration request.

You can't use this parameter with the Identity parameter.

```yaml
Type: Guid
Parameter Sets: MigrationRequestQueue
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
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
