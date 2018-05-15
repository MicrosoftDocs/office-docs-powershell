---
external help file: 
applicable: Skype for Business Online
title: Grant-CsTeamsMessagingPolicy
schema: 2.0.0
---

# Grant-CsTeamsMessagingPolicy

## SYNOPSIS
Assigns a teams messaging policy at the per-user scope. Teams messaging policies determine the features and capabilities that can be used in messaging within the teams client. 

Grant-CsTeamsMessagingPolicy \[\[-Identity\] \<UserIdParameter\>\] \[-PolicyName\] \<string\> \[-Tenant \<guid\>\] \[-DomainController \<Fqdn\>\] \[-PassThru\] \[-WhatIf\] \[-Confirm\] \[\<CommonParameters\>\]

## SYNTAX

```
Grant-CsTeamsMessagingPolicy [-PassThru] [-Confirm] [[-PolicyName] <Object>] [[-Identity] <Object>]
 [-Tenant <Object>] [-DomainController <Object>] [-WhatIf] [-AsJob]
```

## DESCRIPTION
Granular control over which messaging features your users can or cannot use is an important feature for many organizations.  This cmdlet lets you assign a teams messaging policy at the per-user scope. Teams messaging policies determine the features and capabilities that can be used in messaging within the teams client.

## EXAMPLES

### Example 1
```powershell
PS C:\> Grant-CsTeamsMessagingPolicy -identity "Ken Myer" -PolicyName StudentMessagingPolicy
```

In this example, a user with identity "Ken Myer" is being assigned the StudentMessagingPolicy

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

### -Identity
Indicates the Identity of the user account the policy should be assigned to. User Identities can be specified using one of four formats: 1) the user's SIP address; 2) the user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer); and, 4) the user's Active Directory display name (for example, Ken Myer). User Identities can also be referenced by using the user's Active Directory distinguished name.

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
The name of the custom policy that is being assigned to the user.    To remove a specific assignment and fall back to the default tenant policy, you can assign to $Null.

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

### -AsJob

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
