---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Remove-SettingOverride
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019"
---

# Remove-SettingOverride

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

**Caution**: Incorrect usage of the setting override cmdlets can cause serious damage to your Exchange organization. This damage could require you to reinstall Exchange. Only use these cmdlets as instructed by product documentation or under the direction of Microsoft Customer Service and Support.

Use the Remove-SettingOverride cmdlet to remove setting overrides from Active Directory.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Remove-SettingOverride [-Identity] <SettingOverrideIdParameter> [-Confirm] [-DomainController <Fqdn>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Setting overrides configure and store Exchange server customizations in Active Directory. The settings can be organization-wide or server-specific, and they persist in Active Directory across Exchange Cumulative Updates (CUs). Exchange customizations in web.config or exe.config XML application configuration files are server-specific, and they're lost when you install the next Exchange CU.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-SettingOverride -Identity "IM Server Integration"
```

This example removes the setting override named IM Server Integration.

## PARAMETERS

### -Identity
The Identity parameter specifies the setting override that you want to remove. You can use any value that uniquely identifies the override. For example:

- Name

- Distinguished name (DN)

- GUID

```yaml
Type: SettingOverrideIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: True
Position: 1
Default value: None
Accept pipeline input: True
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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
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

## OUTPUTS

###  

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/56877b0e-f972-4c00-9822-57867811dbf4.aspx)
