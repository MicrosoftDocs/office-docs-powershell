---
external help file: 
applicable: Skype for Business Online
schema: 2.0.0
---

# Unregister-CsHybridPSTNAppliance

## SYNOPSIS
Use the `Unregister-CsHybridPSTNAppliance` cmdlet to unregister a previously specified Skype for Business Cloud Connector Edition appliance.

## SYNTAX

```
Unregister-CsHybridPSTNAppliance [[-Identity] <Object>] [-BypassDualWrite <Object>] [-Confirm] [-Force]
 [-Instance <Object>] [-Tenant <Object>] [-WhatIf] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
Skype for Business Cloud Connector Edition appliances are registered, retrieved, modified, and unregistered by the CsHybridPSTNAppliance cmdlet group (Register, Get, Set, and Unregister).
The Skype for Business Cloud Connector Edition appliances can be reviewed in your hybrid configuration by using the `Get-CsTenantHybridConfiguration` cmdlet.
However, you can't create or modify Skype for Business Cloud Connector Edition appliances through the CsTenantHybridConfiguration cmdlets.
You must use the CsHybridPSTNAppliance cmdlets to manage Skype for Business Cloud Connector Edition appliances.

To return a list of all the Role-Based Access Control (RBAC) roles a cmdlet has been assigned, run the following command:

`Get-CsAdminRole | Where-Object {$_.Cmdlets -Match "\<CmdletName\>"}`

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Insert example commands for example 1.
```

Insert descriptive text for example 1.



## PARAMETERS

### -Identity
Specifies the identity of the Skype for Business Cloud Connector Edition appliance.

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

### -Instance
PARAMVALUE: PSObject

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
