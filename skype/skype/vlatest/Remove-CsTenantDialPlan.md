---
external help file: 
applicable: Skype for Business Online
schema: 2.0.0
---

# Remove-CsTenantDialPlan

## SYNOPSIS
Use the Remove-CsTenantDialPlan cmdlet to remove a tenant dial plan.

## SYNTAX

```
Remove-CsTenantDialPlan [[-Identity] <Object>] [-BypassDualWrite <Object>] [-Confirm] [-Force]
 [-Tenant <Object>] [-WhatIf] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
The Remove-CsTenantDialPlan cmdlet removes an existing tenant dial plan (also known as a location profile).
Tenant dial plans provide required information to allow Enterprise Voice users to make telephone calls.
The Conferencing Attendant application also uses tenant dial plans for dial-in conferencing.
A tenant dial plan determines such things as which normalization rules are applied, and whether a prefix must be dialed for external calls.

Removing a tenant dial plan also removes any associated normalization rules.
If no tenant dial plan is assigned to an organization, the Global dial plan is used.

## EXAMPLES

### -------------------------- Example 1 -------------------------- (Skype for Business Online)
```

```

This example removes the Vt1TenantDialPlan2.

Remove-CsTenantDialPlan -Identity Vt1TenantDialPlan2

## PARAMETERS

### -Identity
The Identity parameter is the unique identifier of the tenant dial plan to remove.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassDualWrite
PARAMVALUE: $true | $false

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm parameter prompts you for confirmation before the command is executed.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force parameter suppresses any confirmation prompts that are otherwise displayed before the changes are made.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Specifies the globally unique identifier (GUID) of your Skype for Business Online tenant account.
For example: -Tenant "38aad667-af54-4397-aaa7-e94c79ec2308".
You can find your tenant ID by running this command: Get-CsTenant | Select-Object DisplayName, TenantID

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf parameter describes what would happen if you executed the command, without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsJob
{{Fill AsJob Description}}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/03791f50-7fe8-4e3f-935d-de9dff41050f(OCS.15).aspx)

