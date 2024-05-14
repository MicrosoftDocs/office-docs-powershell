---
external help file: Microsoft.Rtc.Management.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/skype/publish-cslisconfiguration
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Publish-CsLisConfiguration
schema: 2.0.0
manager: rogupta
author: hirenshah1
ms.author: hirshah
ms.reviewer:
---

# Publish-CsLisConfiguration

## SYNOPSIS
Publishes the Location Information Server (LIS) configuration to the Central Management store.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Publish-CsLisConfiguration [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
In order to implement Enhanced 9-1-1 (E9-1-1) in Skype for Business Server, you must create a location mapping (called a wiremap).
This mapping includes matching physical addresses to ports, subnets, switches and wireless access points so any calls made over an Enterprise Voice connection will reach the nearest emergency operator and provide that operator with the correct location of the caller.
This mapping configuration, created by calling cmdlets such as the `Set-CsLisPort` cmdlet and the `Set-CsLisSubnet` cmdlet, is stored in a central location database.
This cmdlet commits any changes in the central location database to the Central Management store, allowing the information to be replicated to the Location Information servers so that the locations can be rendered to clients.
The configuration can be removed from the Central Management store by calling the `Unpublish-CsLisConfiguration` cmdlet.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Publish-CsLisConfiguration
```

This command commits the LIS configuration to the Central Management store.


## PARAMETERS

### -Force
Suppresses any confirmation prompts that would otherwise be displayed before making changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch causes the command to simulate its results. By using this switch, you can view what changes would occur without having to commit those changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.

## OUTPUTS

###  
This cmdlet does not return a value.

## NOTES

## RELATED LINKS

[Debug-CsLisConfiguration](Debug-CsLisConfiguration.md)

[Unpublish-CsLisConfiguration](Unpublish-CsLisConfiguration.md)

[Import-CsLisConfiguration](Import-CsLisConfiguration.md)

[Export-CsLisConfiguration](Export-CsLisConfiguration.md)

[Test-CsLisConfiguration](Test-CsLisConfiguration.md)
