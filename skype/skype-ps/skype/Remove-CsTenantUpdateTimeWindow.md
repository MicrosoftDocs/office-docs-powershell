---
external help file: 
title: Remove-CsTenantUpdateTimeWindow
schema: 2.0.0
---

# Remove-CsTenantUpdateTimeWindow

## SYNOPSIS
Use the `Remove-CsTenantUpdateTimeWindow` cmdlet to remove a previously specified tenant update time window.

## SYNTAX

```
Remove-CsTenantUpdateTimeWindow [[-Identity] <Object>] [-BypassDualWrite <Object>] [-Confirm] [-Force]
 [-Tenant <Object>] [-WhatIf] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
Tenant update time windows are created, retrieved, modified and deleted by the CsTenantUpdateTimeWindow cmdlet group (New, Get, Set and Remove).
The tenant update time windows can be reviewed in your hybrid configuration by using the `Get-CsTenantHybridConfiguration` cmdlet.
However, you can't create or modify tenant update time windows through the CsTenantHybridConfiguration cmdlets.
You must use the CsTenantUpdateTimeWindow cmdlets to manage tenant update time windows.

To return a list of all the Role-Based Access Control (RBAC) roles a cmdlet has been assigned, run the following command:

`Get-CsAdminRole | Where-Object {$_.Cmdlets -Match "\<CmdletName\>"}`

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsTenantUpdateTimeWindow -Identity "AlwaysOn"
```

This example removes the tenant update time window.


## PARAMETERS

### -Identity
Specifies the identity of the tenant update time window.

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
PARAMVALUE: SwitchParameter

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
The Force switch specifies whether to suppress warning and confirmation messages.
It can be useful in scripting to suppress interactive prompts.
If the Force switch isn't provided in the command, you're prompted for administrative input if required.

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
PARAMVALUE: Guid

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
PARAMVALUE: SwitchParameter

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

