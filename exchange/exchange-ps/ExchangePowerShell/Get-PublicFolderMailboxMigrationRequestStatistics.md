---
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
author: chrisda
external help file: Microsoft.Exchange.ProvisioningAndMigration-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-publicfoldermailboxmigrationrequeststatistics
schema: 2.0.0
title: Get-PublicFolderMailboxMigrationRequestStatistics
---

# Get-PublicFolderMailboxMigrationRequestStatistics

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-PublicFolderMailboxMigrationRequestStatistics cmdlet to view the detailed status of individual jobs in a public folder migration batch created using New-MigrationBatch cmdlet.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### IdentityOnPremises
```
Get-MailboxRestoreRequestStatistics [-Identity] <PublicFolderMailboxMigrationRequestIdParameter>
 [-Diagnostic]
 [-DiagnosticArgument <String>]
 [-DomainController <Fqdn>]
 [-IncludeReport]
 [-ReportOnly]
 [<CommonParameters>]
```

### IdentityCloud
```
Get-PublicFolderMailboxMigrationRequestStatistics [-Identity] <PublicFolderMailboxMigrationRequestIdParameter>
 [-DiagnosticInfo <String>]
 [-IncludeReport]
 [-IncludeSkippedItems]
 [-ReportOnly]
 [<CommonParameters>]
```

### MigrationRequestQueue
```
Get-MailboxRestoreRequestStatistics -RequestQueue <DatabaseIdParameter>
 [-Diagnostic]
 [-DiagnosticArgument <String>]
 [-DomainController <Fqdn>]
 [-IncludeReport]
 [-ReportOnly]
 [-RequestGuid <Guid>]
 [<CommonParameters>]
```

## DESCRIPTION
The Get-PublicFolderMailboxMigrationRequestStatistics cmdlet displays the following properties by default.

- Name: The name assigned by the system to a specific mailbox migration job.
- StatusDetail: The current status of the job.
- TargetMailbox: The mailbox being migrated.
- PercentComplete: The percentage of job completion.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-PublicFolderMailboxMigrationRequestStatistics -Identity \PublicFolderMailboxMigration4ce124b0-d760-4364-94bc-40d7918fd171
```

This example uses the Identity parameter to return information about the specified target job.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Identity parameter specifies the public folder mailbox migration request. The default identity value is `\PublicFolderMailboxMigration<UniqueIdentifier>` (for example, `PublicFolderMailboxMigrationac6d9eb4-ee49-405f-b90d-04e9a258bd7e`).

You can't use this parameter with the RequestQueue and RequestGuid parameters.

```yaml
Type: PublicFolderMailboxMigrationRequestIdParameter
Parameter Sets: IdentityOnPremises, IdentityCloud
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -RequestQueue

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: IdentityOnPremises, MigrationRequestQueue
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeReport

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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

### -ReportOnly

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

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

This parameter is available only in on-premises Exchange.

The RequestGuid parameter specifies the unique RequestGuid identifier of the request that you want to view. To find the RequestGuid value, use the Get-PublicFolderMailboxMigrationRequest cmdlet.

If you use this parameter, you also need to use the RequestQueue parameter. You can't use either of these parameters with the Identity parameter.

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

## OUTPUTS

## NOTES

## RELATED LINKS
