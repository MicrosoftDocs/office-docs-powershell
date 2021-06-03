---
external help file: Microsoft.Rtc.Management.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/grant-csteamsfeedbackpolicy
applicable: Skype for Business Online
title: Grant-CsTeamsFeedbackPolicy
schema: 2.0.0
manager: bulenteg
ms.author: tomkau
author: tomkau
ms.reviewer:
---

# Grant-CsTeamsFeedbackPolicy

## SYNOPSIS

Use this cmdlet to grant a specific Teams Feedback policy to a user (the ability to send feedback about Teams to Microsoft and whether they receive the survey).

## SYNTAX

```
Grant-CsTeamsFeedbackPolicy [-PassThru] [-Confirm] [[-PolicyName] <Object>] [[-Identity] <Object>] [-Global]
 [-Tenant <Object>] [-DomainController <Object>] [-WhatIf]
```

## DESCRIPTION
Grants a specific Teams Feedback policy to a user (the ability to send feedback about Teams to Microsoft and whether they receive the survey) or to set a specific Teams feedback policy the new effective global policy.

## EXAMPLES

### Example 1
```powershell
PS C:\> Grant-CsTeamsFeedbackPolicy -PolicyName "New Hire Feedback Policy" -Identity kenmyer@litwareinc.com
```

In this example, the policy "New Hire Feedback Policy" is granted to the user kenmyer@litwareinc.com.

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

### -DomainController
Internal Microsoft use.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Global
Use this parameter to make the specified policy in -PolicyName the new effective global policy.

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
Indicates the identity of the user account the policy should be assigned to. 

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru
Including this parameter (which does not take a value) displays the user information when the cmdlet completes. Normally there is no output when this cmdlet is run.

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

### -PolicyName
The identity of the policy to be granted.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Internal Microsoft use.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
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

## INPUTS

### Microsoft.Rtc.Management.AD.UserIdParameter

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS
