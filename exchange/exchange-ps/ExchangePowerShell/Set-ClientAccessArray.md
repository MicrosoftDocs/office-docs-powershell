---
applicable: Exchange Server 2010
author: chrisda
external help file: Microsoft.Exchange.ServerStatus-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/set-clientaccessarray
schema: 2.0.0
title: Set-ClientAccessArray
---

# Set-ClientAccessArray

## SYNOPSIS
This cmdlet is available only in Exchange Server 2010.

Use the Set-ClientAccessArray cmdlet to modify RPC Client Access arrays (load-balanced arrays of Client Access servers within a single Active Directory site).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-ClientAccessArray [-Identity] <ClientAccessArrayIdParameter>
 [-Confirm]
 [-DomainController <Fqdn>]
 [-Fqdn <Fqdn>]
 [-Name <String>]
 [-Site <AdSiteIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-ClientAccessArray -Identity "ContosoArray" -Name "CASArray"
```

This example changes the names the name of the existing Client Access array named ContosoArray to CASArray.

### Example 2
```powershell
Set-ClientAccessArray -Identity "ContosoArray" -FQDN "casarrayeu.contoso.com"
```

This example changes the fully qualified domain name of the existing Client Access array named ContosoArray to casarrayeu.contoso.com.

### Example 3
```powershell
Set-ClientAccessArray -Identity "ContosoArray" -Site "SiteEU"
```

This example associates the existing Client Access array named ContosoArray with the Active Directory site named SiteEU.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010

The Identity parameter specifies the Client Access array that you want to modify. You can use these values:

- Name (if the value doesn't contain spaces)
- Distinguished name (DN)
- ExchangeLegacyDN
- Fully qualified domain name (FQDN)
- GUID

```yaml
Type: ClientAccessArrayIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010

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

> Applicable: Exchange Server 2010

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

### -Fqdn

> Applicable: Exchange Server 2010

The Fqdn parameter specifies the fully qualified domain name of the Client Access array (for example, casarray01.contoso.com). This is the value that RPC over TCP clients use to connect to the Client Access servers in the array.

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

### -Name

> Applicable: Exchange Server 2010

The Name parameter specifies the descriptive name of the Client Access array. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks ("). If the value contains spaces, you can't use the Name value to identify the Client Access array for the Get-ClientAccessArray, Remove-ClientAccessArray, or Set-ClientAccessArray cmdlets.

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

### -Site

> Applicable: Exchange Server 2010

The Site parameter specifies the Active Directory site that contains the Client Access array. You can use any value that uniquely identifies the site. For example:

- Name
- Distinguished name (DN)
- GUID

To see a list of available sites, use the Get-ADSite cmdlet.

```yaml
Type: AdSiteIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2010

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
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=2081749). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=2081749). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
