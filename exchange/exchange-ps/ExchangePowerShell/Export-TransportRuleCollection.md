---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/export-transportrulecollection
schema: 2.0.0
title: Export-TransportRuleCollection
---

# Export-TransportRuleCollection

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Export-TransportRuleCollection cmdlet to export the transport rules in your organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Export-TransportRuleCollection [[-Identity] <RuleIdParameter>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-Format <RuleCollectionFormat>]
 [-ExportLegacyRules]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The Export-TransportRuleCollection cmdlet can be used to export the transport rule collection in your organization. The format of the exported transport rule collection changed in Exchange Server 2013. The new format can't be imported into Exchange Server 2010.

Exporting the rules collection is a two-step process. You first export the rules collection to a variable, and then use the Set-Content cmdlet to write the data to an XML file. For more information, see [Set-Content](https://learn.microsoft.com/powershell/module/microsoft.powershell.management/set-content).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
$file = Export-TransportRuleCollection

[System.IO.File]::WriteAllBytes('C:\My Docs\Rules.xml', $file.FileData)
```

This example exports transport rules. Rule data is first exported to the variable $file, and then written to the XML file Rules.xml in the C:\\My Docs folder.

### Example 2
```powershell
$file = Export-TransportRuleCollection -ExportLegacyRules

[System.IO.File]::WriteAllBytes('C:\My Docs\LegacyRules.xml', $file.FileData)
```

In Exchange Server 2010, this example exports legacy transport rules that were created in Exchange 2007 to an XML file. The first command uses the ExportLegacyRules switch to export legacy transport rules to the variable named $file. The second step saves the exported data to the XML file named LegacyRules.xml.

You can import the exported rules collection to Exchange 2010 using the Import-TransportRuleCollection cmdlet.

You need to run these commands in this example on an Exchange 2010 Hub Transport server.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

This parameter is functional only in Exchange Server 2010.

The Identity parameter specifies the transport rule that you want to export. You can use any value that uniquely identifies the rule. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: RuleIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

The DomainController parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data.

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

### -ExportLegacyRules

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The ExportLegacyRules switch is required to export transport rules from Exchange 2007. You don't need to specify a value with this switch.

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

### -Format

> Applicable: Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

The Format parameter specifics the format of the exported transport rule collection. Valid values are:

- RuleCollectionXML
- InternalXML
- DlpMigrationRuleCollection

```yaml
Type: RuleCollectionFormat
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

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
