---
external help file: 
applicable: Skype for Business Online
title: Get-CsHybridPSTNAppliance
schema: 2.0.0
---

# Get-CsHybridPSTNAppliance

## SYNOPSIS
Use the Get-CsHybridPSTNAppliance cmdlet to retrieve information about your Skype for Business Cloud Connector Edition appliances.

## SYNTAX

### Identity (Default)
```
Get-CsHybridPSTNAppliance [-Tenant <Guid>] [[-Identity] <XdsGlobalRelativeIdentity>] [-LocalStore]
 [<CommonParameters>]
```

### SiteName
```
Get-CsHybridPSTNAppliance [-Tenant <Guid>] [-SiteName <String>] [-Name <String>] [-LocalStore]
 [<CommonParameters>]
```

### Filter
```
Get-CsHybridPSTNAppliance [-Tenant <Guid>] [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
Skype for Business Cloud Connector Edition appliances are registered, retrieved, modified, and unregistered by the CsHybridPSTNAppliance cmdlet group (Register, Get, Set, and Unregister).
The Skype for Business Cloud Connector Edition appliances can be reviewed in your hybrid configuration by using the Get-CsTenantHybridConfiguration cmdlet.
However, you can't create or modify Skype for Business Cloud Connector Edition appliances through the CsTenantHybridConfiguration cmdlets.
You must use the CsHybridPSTNAppliance cmdlets to manage Skype for Business Cloud Connector Edition appliances.

To return a list of all the Role-Based Access Control (RBAC) roles a cmdlet has been assigned, run the following command:

Get-CsAdminRole | Where-Object {$_.Cmdlets -Match "\<CmdletName\>"}

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsHybridPSTNAppliance
```

The command shown in Example 1 returns information for all the Skype for Business Cloud Connector Edition appliances.

### -------------------------- Example 2 --------------------------
```
Get-CsHybridPSTNAppliance -SiteName "SeattlePSTN"
```

The command shown in Example 2 returns information for all the Skype for Business Cloud Connector Edition appliances in the given site.

### -------------------------- Example 3 --------------------------
```
Get-CsHybridPSTNAppliance -Name "CCE1"
```

The command shown in Example 3 returns information for the Skype for Business Cloud Connector Edition appliance with the given name.

### -------------------------- Example 4 --------------------------
```
Get-CsHybridPSTNAppliance -SiteName "SeattlePSTN" -Name "CCE1"
```

The command shown in Example 4 returns information for the Skype for Business Cloud Connector Edition appliance in the given site with the given name.


## PARAMETERS

### -Filter
PARAMVALUE: String

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

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

### -LocalStore
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

### -Name
Name of Skype for Business Cloud Connector Edition appliance.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SiteName
Name of Skype for Business Cloud Connector Edition site that the appliance belongs to.

```yaml
Type: String
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
Type: Guid
Parameter Sets: (All)
Aliases: 
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

