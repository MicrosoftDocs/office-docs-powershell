---
applicable: Skype for Business Online
author: tomkau
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: SkypeForBusiness
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/skypeforbusiness/set-csexternalusercommunicationpolicy
schema: 2.0.0
title: Set-CsExternalUserCommunicationPolicy
---

# Set-CsExternalUserCommunicationPolicy

## SYNOPSIS
Modifies an existing external user communication policy for use in your organization to block P2P file transfer with Federated partners only.

## SYNTAX

## SYNTAX

### Identity (Default)
```
Set-CsExternalUserCommunicationPolicy [-Tenant <Guid>] [-EnableFileTransfer <Boolean>]
 [-EnableP2PFileTransfer <Boolean>] [-AllowPresenceVisibility <Boolean>] [-AllowTitleVisibility <Boolean>]
 [[-Identity] <XdsIdentity>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsExternalUserCommunicationPolicy [-Tenant <Guid>] [-EnableFileTransfer <Boolean>]
 [-EnableP2PFileTransfer <Boolean>] [-AllowPresenceVisibility <Boolean>] [-AllowTitleVisibility <Boolean>]
 [-Instance <PSObject>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

The following parameters are not applicable to Skype for Business Online: AllowPresenceVisibility, AllowTitleVisibility, EnableFileTransfer, Force, Identity, Instance, PipelineVariable, and Tenant

## EXAMPLES

### Example 1
```
PS C:\> Set-CsExternalUserCommunicationPolicy -Identity BlockExternalP2PFileTransfer -EnableP2PFileTransfer $False
```

This example modifies an existing policy to block external file transfer.


## PARAMETERS

### -AllowPresenceVisibility

> Applicable: Skype for Business Online

This parameter is reserved for internal Microsoft use.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowTitleVisibility

> Applicable: Skype for Business Online

This parameter is reserved for internal Microsoft use.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableFileTransfer

> Applicable: Skype for Business Online

This parameter is reserved for internal Microsoft use.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableP2PFileTransfer

> Applicable: Skype for Business Online

Indicates whether file transfers to Federated partners are allowed. The default value is True.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force

> Applicable: Skype for Business Online

The Force switch specifies whether to suppress warning and confirmation messages. It can be useful in scripting to suppress interactive prompts. If the Force switch isn't provided in the command, you're prompted for administrative input if required.

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

### -Identity

> Applicable: Skype for Business Online

Unique identifier for the external user communication policy to be modified.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance

> Applicable: Skype for Business Online

This parameter is reserved for internal Microsoft use.

```yaml
Type: PSObject
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant

> Applicable: Skype for Business Online

This parameter is reserved for internal Microsoft use.


```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Skype for Business Online

Prompts you for confirmation before running the cmdlet.

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

### -WhatIf

> Applicable: Skype for Business Online

Shows what would happen if the cmdlet runs.
The cmdlet is not run.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.Management.Automation.PSObject

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
