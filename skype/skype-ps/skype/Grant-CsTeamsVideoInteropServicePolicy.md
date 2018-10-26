---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
Module Name: Skype for Business Online
title: Grant-CsTeamsVideoInteropServicePolicy
schema: 2.0.0
---

# Grant-CsTeamsVideoInteropServicePolicy

## SYNOPSIS

Cloud Video Interop for Teams enables 3rd party VTC devices to be able to join Teams meetings.  You can use the TeamsVideoInteropServicePolicy cmdlets to enable Cloud Video Interop for particular users or for your entire organization.

## SYNTAX

### Identity (Default)
```
Grant-CsTeamsVideoInteropServicePolicy [[-Identity] <UserIdParameter>] [-PolicyName] <String>
 [-Tenant <System.Guid>] [-DomainController <Fqdn>] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### GrantToTenant
```
Grant-CsTeamsVideoInteropServicePolicy [-PolicyName] <String> [-Tenant <System.Guid>]
 [-DomainController <Fqdn>] [-PassThru] [-Global] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Cloud Video Interop for Teams enables 3rd party VTC devices to be able to join Teams meetings.  You can use the TeamsVideoInteropServicePolicy cmdlets to enable Cloud Video Interop for particular users or for your entire organization.  Microsoft provides pre-constructed policies for each of our supported partners that allow you to designate which of the partners to use for cloud video interop.  

The Grant-CsTeamsVideoInteropServicePolicy cmdlet allows you to assign a pre-constructed policies for use in your organization or assign the policy to specific users.

## EXAMPLES

### Example 1
```powershell
PS C:\> Grant-CsTeamsVideoInteropServicePolicy  -PolicyName ServiceProviderDisabled
```

In this example, Cloud Video Interop has been disabled for the entire tenant, except for those users that have an explicit policy assigned to them.

### Example 2
```powershell
PS C:\> Grant-CsTeamsVideoInteropServicePolicy -PolicyName ServiceProviderDisabled -Identity bob@contoso.com
```

In this example, Cloud Video Interop has been disabled only for one user - Bob - but the default tenant policy has been left on for all other users who do not have an explicit assignment.

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
Internal Microsoft use only.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Global
Use this flag to override the warning when assigning the global policy for your tenant.

```yaml
Type: SwitchParameter
Parameter Sets: GrantToTenant
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
{{Fill Identity Description}}

```yaml
Type: UserIdParameter
Parameter Sets: Identity
Aliases:

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -PassThru
Enables you to pass a user object through the pipeline that represents the user being assigned the policy. By default, the Grant-CsTeamsVideoInteropServicePolicy cmdlet does not pass objects through the pipeline.

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
Specify the pre-constructed policy that you would like to assign to your tenant or a particular user.  You can get the policies available for your organization using the cmdlet Get-CsTeamsVideoInteropServicePolicy

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Internal Microsoft use only.

```yaml
Type: System.Guid
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Rtc.Management.AD.UserIdParameter


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
