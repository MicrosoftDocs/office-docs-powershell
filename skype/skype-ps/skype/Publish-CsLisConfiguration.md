---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
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

[Debug-CsLisConfiguration]()

[Unpublish-CsLisConfiguration]()

[Import-CsLisConfiguration]()

[Export-CsLisConfiguration]()

[Test-CsLisConfiguration]()
