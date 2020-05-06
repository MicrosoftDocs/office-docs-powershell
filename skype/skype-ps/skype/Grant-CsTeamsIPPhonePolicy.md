---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Module Name: Skype for Business Online
online version: https://docs.microsoft.com/powershell/module/skype/grant-csteamsipphonepolicy
applicable: Skype for Business Online
title: Grant-CSTeamsIPPhonePolicy
author: tonywoodruff
ms.author: anwoodru
ms.reviewer: kponnus
manager: sandrao
schema: 2.0.0
---

# Grant-CsTeamsIPPhonePolicy

## SYNOPSIS

Use the Grant-CSTeamsIPPhonePolicy cmdlet to assign a set of Teams phone policies to a user account. Teams phone policies determine the features that are available to users of Teams phones. For example, you might enable the hot desking feature for some users while disabling it for others.


## SYNTAX

```
Grant-CsTeamsIPPhonePolicy [-PassThru] [-Confirm] [[-PolicyName] <XdsIdentity>] [[-Identity] <Object>] [-Global]
 [-Tenant <Guid>] [-DomainController <Object>] [-WhatIf] [-AsJob]
```

## DESCRIPTION
Use the Grant-CSTeamsIPPhonePolicy cmdlet to assign a set of Teams phone policies to a phone signed in with an account that may be used by end users, common area phones, or meeting room accounts. 

Note: Assigning a per user policy will override any global policy taking effect against the respective user account. 

## EXAMPLES

### Example 1
```powershell
PS C:\> Grant-CsTeamsIPPhonePolicy -Identity Foyer1@contoso.com -PolicyName CommonAreaPhone
```

This example shows assignment of the CommonAreaPhone policy to user account Foyer1@contoso.com

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
Microsoft Internal Use Only.

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
The Identity of the Teams phone  policy to apply to the user.

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

### -Tenant
Microsoft internal usage only.

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

### -AsJob
Indicates that this cmdlet runs as a background job.

When you specify the AsJob parameter, the command immediately returns an object that represents the background job. You can continue to work in the session while the job finishes. The job is created on the local computer and the results from the Skype for Business Online session are automatically returned to the local computer. To get the job results, use the Receive-Job cmdlet.

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

## INPUTS

### Microsoft.Rtc.Management.AD.UserIdParameter

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS