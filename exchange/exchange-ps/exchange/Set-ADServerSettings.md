---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/set-adserversettings
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Set-ADServerSettings
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019"
---

# Set-AdServerSettings

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Set-AdServerSettings cmdlet to manage the Active Directory Domain Services (AD DS) environment in the current Exchange Management Shell session. The Set-AdServerSettings cmdlet replaces the AdminSessionADSettings session variable that was used in Exchange Server 2007.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Instance
```
Set-AdServerSettings -RunspaceServerSettings <RunspaceServerSettingsPresentationObject>
 [-Confirm]
 [-WhatIf] [<CommonParameters>]
```

### FullParams
```
Set-AdServerSettings [-ConfigurationDomainController <Fqdn>] [-PreferredGlobalCatalog <Fqdn>] [-RecipientViewRoot <String>] [-SetPreferredDomainControllers <MultiValuedProperty>] [-ViewEntireForest <Boolean>]
 [-Confirm]
 [-WhatIf] [<CommonParameters>]
```

### SingleDC
```
Set-AdServerSettings [[-PreferredServer] <Fqdn>] [-RecipientViewRoot <String>] [-ViewEntireForest <Boolean>]
 [-Confirm]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-AdServerSettings -RecipientViewRoot "contoso.com/Marketing Users"
```

This example sets the recipient scope to the Marketing Users OU in the contoso.com domain for the current session.

### Example 2
```powershell
Set-AdServerSettings -ViewEntireForest $true -PreferredGlobalCatalog gc1.contoso.com
```

This example sets the scope of the current session to the entire forest and designates gc1.contoso.com as the preferred global catalog server.

## PARAMETERS

### -PreferredServer
The PreferredServer parameter specifies the FQDN of the domain controller to be used for this session.

```yaml
Type: Fqdn
Parameter Sets: SingleDC
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RunspaceServerSettings
The RunspaceServerSettings parameter specifies whether to pass an entire configuration object to the command to be processed. This parameter is useful in scripts where an entire object must be passed to the command.

```yaml
Type: RunspaceServerSettingsPresentationObject
Parameter Sets: Instance
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ConfigurationDomainController
The ConfigurationDomainController parameter specifies the fully qualified domain name (FQDN) of the configuration domain controller to be used for reading Exchange configuration information in this session.

```yaml
Type: Fqdn
Parameter Sets: FullParams
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PreferredGlobalCatalog
The PreferredGlobalCatalog parameter specifies the FQDN of the global catalog server to be used for reading recipient information in this session.

```yaml
Type: Fqdn
Parameter Sets: FullParams
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientViewRoot
The RecipientViewRoot parameter specifies the organizational unit (OU) to include in the recipient scope for this session. When you specify a recipient scope with this parameter, only the recipients included in the scope are returned. To specify an OU, use the syntax \<FQDN of domain\>/\<OU tree\>.

```yaml
Type: String
Parameter Sets: SingleDC, FullParams
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SetPreferredDomainControllers
The SetPreferredDomainControllers parameter specifies the list of domain controllers used to read information from Active Directory in this session. You must specify the FQDN of the domain controllers. Separate multiple domain controllers using commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: FullParams
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ViewEntireForest
The ViewEntireForest parameter specifies whether all the objects in the forest are viewed and managed in this session. Valid values are $true and $false.

When you specify a value of $true, the value stored in the RecipientViewRoot parameter is removed and all of the recipients in the forest can be viewed and managed.

```yaml
Type: Boolean
Parameter Sets: SingleDC, FullParams
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
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
