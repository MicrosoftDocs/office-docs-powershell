---
external help file: 
title: Get-CsOnlineDialInConferencingServiceNumber
schema: 2.0.0
---

# Get-CsOnlineDialInConferencingServiceNumber

## SYNOPSIS
Use the Get-CsOnlineDialInConferencingServiceNumber cmdlet to return all of the default dial-in service numbers that are assigned to an Office 365 audio conferencing bridge.

## SYNTAX

```
Get-CsOnlineDialInConferencingServiceNumber [[-Identity] <Object>] [-BridgeId <Object>] [-Tenant <Object>]
 [-TenantDomain <Object>] [-BridgeName <Object>] [-BypassDualWrite <Object>] [-City <Object>]
 [-DomainController <Object>] [-Force] [-ResultSize <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
The Get-CsOnlineDialInConferencingServiceNumber cmdlet returns all of the dial-in service numbers for a given tenant or Office 365 organization that are assigned to an audio conferencing bridge.
If the cmdlet is run by a tenant administrator for an organization, it will run within the tenant's scope.
A tenant administrator can only retrieve and view information that is associated with their organization.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsOnlineDialInConferencingServiceNumber | fl
```

This example returns all of the default service numbers for an organization in a formatted list.

### -------------------------- Example 2 --------------------------
```
Get-CsOnlineDialInConferencingServiceNumber -BridgeId 72dfe128-d079-46f8-8tr0-gb12369p167c | fl
```

This example returns all of the default service numbers for a specified audio conferencing bridge in a formatted list.

### -------------------------- Example 3 --------------------------
```
Get-CsOnlineDialInConferencingBridge -Name "Conference Bridge"
```

This example returns all of the default service numbers for the audio conferencing bridge named "Conference Bridge".


## PARAMETERS

### -BridgeId
Specifies the globally-unique identifier (GUID) for the audio conferencing bridge.
When it's used it returns all of the service numbers that are configured on the audio conferencing bridge.

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

### -Identity
Specifies the default dial-in service number string.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
This parameter is reserved for internal Microsoft use.

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

### -TenantDomain
This parameter is reserved for internal Microsoft use.

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

### -BridgeName
Specifies the name of the audio conferencing bridge.
When it is used it returns all of the service numbers that are configured on the audio conferencing bridge.

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

### -City
Specifies the city geocode to be used.
When used it lists all of the service numbers for a specific city geocode.

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

### -DomainController
Specifies the domain controller that's used by the cmdlet to read or write the specified data.
Valid inputs for this parameter include:

Fully qualified domain name (FQDN): `-DomainController atl-cs-001.Contoso.com.`

Computer name: `-DomainController atl-cs-001`

```yaml
Type: Object
Parameter Sets: (All)
Aliases: DC
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

### -ResultSize
Specifies the number of records returned by the cmdlet.
For example, to return seven users (regardless of the number of users that are in your forest) include the ResultSize parameter and set the parameter value to 7.
Note that there is no way to guarantee which seven users will be returned.

The result size can be set to any whole number between 0 and 2147483647, inclusive.
If set to 0 the command will run, but no data will be returned.
If you set the ResultSize to 7 but you have only three users in your forest, the command will return those three users, and then complete without error.

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

