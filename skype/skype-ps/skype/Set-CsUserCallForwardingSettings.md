---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Skype for Business Server 2019
title: Set-CsUserCallForwardingSettings
schema: 2.0.0
manager: rogupta
author: hirenshah1
ms.author: hirshah
ms.reviewer:
---

# Set-CsUserCallForwardingSettings

## SYNOPSIS
{{ Fill in the Synopsis }}

## SYNTAX

### DisableForwarding
```
Set-CsUserCallForwardingSettings [-DisableForwarding] [-SettingsActiveWorkHours] [-UnansweredToVoicemail]
 [-UnansweredToOther <String>] [-UnansweredWaitTime <Int32>] [-User] <String> [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

### EnableForwarding
```
Set-CsUserCallForwardingSettings -EnableForwarding <String> [-SettingsActiveWorkHours]
 [-DelegateRingWaitTime <Int32>] [-Delegates <System.Management.Automation.PSListModifier`1[System.String]>]
 [-User] <String> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### EnableSimulRing
```
Set-CsUserCallForwardingSettings -EnableSimulRing <String> [-SettingsActiveWorkHours] [-UnansweredToVoicemail]
 [-UnansweredToOther <String>] [-UnansweredWaitTime <Int32>] [-TeamDelegateRingWaitTime <Int32>]
 [-Delegates <System.Management.Automation.PSListModifier`1[System.String]>]
 [-Team <System.Management.Automation.PSListModifier`1[System.String]>] [-User] <String> [-Force] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
{{ Fill in the Description }}

## EXAMPLES

### Example 1
```powershell
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -Confirm
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

### -DelegateRingWaitTime
{{ Fill DelegateRingWaitTime Description }}

```yaml
Type: Int32
Parameter Sets: EnableForwarding
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Delegates
{{ Fill Delegates Description }}

```yaml
Type: System.Management.Automation.PSListModifier`1[System.String]
Parameter Sets: EnableForwarding, EnableSimulRing
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisableForwarding
{{ Fill DisableForwarding Description }}

```yaml
Type: SwitchParameter
Parameter Sets: DisableForwarding
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableForwarding
{{ Fill EnableForwarding Description }}

```yaml
Type: String
Parameter Sets: EnableForwarding
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableSimulRing
{{ Fill EnableSimulRing Description }}

```yaml
Type: String
Parameter Sets: EnableSimulRing
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
{{ Fill Force Description }}

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

### -SettingsActiveWorkHours
{{ Fill SettingsActiveWorkHours Description }}

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

### -Team
{{ Fill Team Description }}

```yaml
Type: System.Management.Automation.PSListModifier`1[System.String]
Parameter Sets: EnableSimulRing
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TeamDelegateRingWaitTime
{{ Fill TeamDelegateRingWaitTime Description }}

```yaml
Type: Int32
Parameter Sets: EnableSimulRing
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UnansweredToOther
{{ Fill UnansweredToOther Description }}

```yaml
Type: String
Parameter Sets: DisableForwarding, EnableSimulRing
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UnansweredToVoicemail
{{ Fill UnansweredToVoicemail Description }}

```yaml
Type: SwitchParameter
Parameter Sets: DisableForwarding, EnableSimulRing
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UnansweredWaitTime
{{ Fill UnansweredWaitTime Description }}

```yaml
Type: Int32
Parameter Sets: DisableForwarding, EnableSimulRing
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -User
{{ Fill User Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases: DisplayName, SipAddress, Identity

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -WhatIf
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS
