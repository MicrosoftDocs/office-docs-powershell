---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Unpublish-CsLisConfiguration
schema: 2.0.0
---

# Unpublish-CsLisConfiguration

## SYNOPSIS
Removes the Location Information Server (LIS) configuration from the Central Management store.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Unpublish-CsLisConfiguration [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
In order to implement Enhanced 9-1-1 (E9-1-1) in Skype for Business Server, you must create a location mapping (called a wiremap).
This mapping includes matching physical addresses to ports, subnets, switches, and wireless access points so emergency calls made over an Enterprise Voice connection will reach the nearest emergency operator and provide that operator with the correct location of the caller.
This mapping configuration, created by calling cmdlets such as the `Set-CsLisPort` cmdlet and the `Set-CsLisSubnet` cmdlet, is stored in the location configuration database.
A configuration can be committed from the location configuration database to the Central Management store by calling the `Publish-CsLisConfiguration` cmdlet, which allows for replication of the data to the Location Information Server.
The `Unpublish-CsLisConfiguration` cmdlet removes the LIS configuration from the Central Management store.


## EXAMPLES

### -------------------------- EXAMPLE 1 --------------------------
```
Unpublish-CsLisConfiguration
```

This command removes the LIS configuration from the Central Management store.


## PARAMETERS

### -Force
Suppresses any confirmation prompts that would otherwise be displayed before making changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.

## OUTPUTS

###  
This cmdlet does not return a value.

## NOTES

## RELATED LINKS

[Debug-CsLisConfiguration](Debug-CsLisConfiguration.md)

[Publish-CsLisConfiguration](Publish-CsLisConfiguration.md)

[Import-CsLisConfiguration](Import-CsLisConfiguration.md)

[Export-CsLisConfiguration](Export-CsLisConfiguration.md)

[Test-CsLisConfiguration](Test-CsLisConfiguration.md)
