---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/remove-csonlinelislocation
applicable: Microsoft Teams
title: Remove-CsOnlineLisLocation
schema: 2.0.0
manager: bulenteg
author: jenstrier
ms.author: serdars
ms.reviewer:
---

# Remove-CsOnlineLisLocation

## SYNOPSIS
Use the Remove-CsOnlineLisLocation cmdlet to remove an existing emergency location from the Location Information Service (LIS).

You can only remove locations that have no assigned users or phone numbers. You can't remove the default location, you will have to delete the associated
civic address which will delete the default location.

## SYNTAX
```
Remove-CsOnlineLisLocation -LocationId <Guid> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
If the location specified for removal is assigned to users, the cmdlet will fail until the users assignments are removed.

## EXAMPLES

### Example 1
```
Remove-CsOnlineLisLocation -LocationId 788dd820-c136-4255-9f61-24b880ad0763
```

This example removes the location specified by its identity.

## PARAMETERS

### -LocationId
Specifies the unique identifier of the location to be deleted.
Location identities can be discovered by using the Get-CsOnlineLisLocation cmdlet.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm
The Confirm switch causes the command to pause processing and requires confirmation to proceed.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to suppress warning and confirmation messages.
It can be useful in scripting to suppress interactive prompts.
If the Force switch isn't provided in the command, you're prompted for administrative input if required.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch causes the command to simulate its results.
By using this switch, you can view what changes would occur without having to commit those changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### This cmdlet supports pipelined input from the Get-CsOnlineLisLocation cmdlet.

## OUTPUTS

### None

## NOTES

## RELATED LINKS

[Set-CsOnlineLisLocation](https://learn.microsoft.com/powershell/module/teams/set-csonlinelislocation)

[Get-CsOnlineLisLocation](https://learn.microsoft.com/powershell/module/teams/get-csonlinelislocation)

[New-CsOnlineLisLocation](https://learn.microsoft.com/powershell/module/teams/new-csonlinelislocation)
