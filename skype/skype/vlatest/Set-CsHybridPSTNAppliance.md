---
external help file: 
applicable: Skype for Business Online
schema: 2.0.0
---

# Set-CsHybridPSTNAppliance

## SYNOPSIS
Use the Set-CsHybridPSTNAppliance cmdlet to modify an existing Skype for Business Cloud Connector Edition appliance's attributes.

## SYNTAX

```
Set-CsHybridPSTNAppliance [[-Identity] <Object>] [-BypassDualWrite <Object>] [-Confirm] [-Force]
 [-Instance <Object>] [-MaintenanceMode <Object>] [-MediationServerGruu <Object>] [-Tenant <Object>] [-WhatIf]
 [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
Skype for Business Cloud Connector Edition appliances are registered, retrieved, modified, and unregistered by the CsHybridPSTNAppliance cmdlet group (Register, Get, Set, and Unregister).
The Skype for Business Cloud Connector Edition appliances can be reviewed in your hybrid configuration by using the Get-CsTenantHybridConfiguration cmdlet.
However, you can't create or modify Skype for Business Cloud Connector Edition appliances through the CsTenantHybridConfiguration cmdlets.
You must use the CsHybridPSTNAppliance cmdlets to manage Skype for Business Cloud Connector Edition appliances.

To return a list of all the Role-Based Access Control (RBAC) roles a cmdlet has been assigned, run the following command:

Get-CsAdminRole | Where-Object {$_.Cmdlets -Match "\<CmdletName\>"}

## EXAMPLES

### -------------------------- Example 1 -------------------------- (Skype for Business Online)
```

```

Insert descriptive text for example 1.

Insert example commands for example 1.

## PARAMETERS

### -Identity
PARAMVALUE: XdsGlobalRelativeIdentity

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
PARAMVALUE: SwitchParameter

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

### -MaintenanceMode
If set to $True, service resilience detection will be off and no checks for Bits and OS updates will run.
This allows administrators to make manual maintenance changes on the host machine.

If set to $False, service resilience detection will be on and checks for Bits and OS updates will run if Auto Update is also set to $True.

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

### -MediationServerGruu
PARAMVALUE: String

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

[Online Version](http://technet.microsoft.com/EN-US/library/09ab6c29-e0a4-4ef3-9c34-1239e789ac43(OCS.15).aspx)

