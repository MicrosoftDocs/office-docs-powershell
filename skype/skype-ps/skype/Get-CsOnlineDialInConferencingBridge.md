---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml 
applicable: Skype for Business Online
title: Get-CsOnlineDialInConferencingBridge
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Get-CsOnlineDialInConferencingBridge

## SYNOPSIS
Use the Get-CsOnlineDialInConferencingBridge cmdlet to view the settings on an audio conferencing bridge that is used when Microsoft is the audio conferencing provider.

## SYNTAX

### EmptySet (Default)
```
Get-CsOnlineDialInConferencingBridge [-Tenant <Guid>] [-TenantDomain <String>]
 [-DomainController <Fqdn>] [-Force] [<CommonParameters>]
```

### UniqueBridgeParams
```
Get-CsOnlineDialInConferencingBridge [-Identity] <Guid> [-Tenant <Guid>] [-TenantDomain <String>]
 [-DomainController <Fqdn>] [-Force] [<CommonParameters>]
```

### BridgeNameParams
```
Get-CsOnlineDialInConferencingBridge -Name <String> [-Tenant <Guid>] [-TenantDomain <String>]
 [-DomainController <Fqdn>] [-Force] [<CommonParameters>]
```

## DESCRIPTION
The Get-CsOnlineDialInConferencingBridge cmdlet is used to view all of the settings for all dial-in conferencing bridges or for a specific dial-in conferencing bridge.
However, if the PSTN conferencing service status of the tenant is Disabled, no results will be displayed.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```powershell
Get-CsOnlineDialInConferencingBridge | fl
```

This example shows how to return all of the audio conferencing bridges that are being used and returns the results in a formatted list.

### -------------------------- Example 2 --------------------------
```powershell
Get-CsOnlineDialInConferencingBridge -Tenant 26efe125-c070-46f9-8ed0-fc02165a167c
```

This example shows how to return all of the audio conferencing bridges for the given tenant.


## PARAMETERS

### -Identity
Specifies the globally-unique identifier (GUID) for the audio conferencing bridge.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
Specifies the name of the audio conferencing bridge.

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

### -DomainController
Specifies the domain controller that's used by the cmdlet to read or write the specified data.
Valid inputs for this parameter include:

Fully qualified domain name (FQDN): 

`-DomainController atl-cs-001.Contoso.com`

Computer name: 

`-DomainController atl-cs-001`

This parameter is reserved for internal Microsoft use.

```yaml
Type: Fqdn
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

### -Tenant
This parameter is reserved for internal Microsoft use.

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

### -TenantDomain
This parameter is reserved for internal Microsoft use.

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

### -AsJob
Indicates that this cmdlet runs as a background job.

When you specify the AsJob parameter, the command immediately returns an object that represents the background job. You can continue to work in the session while the job finishes. The job is created on the local computer and the results from the Skype for Business Online session are automatically returned to the local computer. To get the job results, use the Receive-Job cmdlet.

For more information about Windows PowerShell background jobs, see [about_Jobs]( https://docs.microsoft.com/powershell/module/microsoft.powershell.core/about/about_jobs?view=powershell-6) and [about_Remote_Jobs]( https://docs.microsoft.com/powershell/module/microsoft.powershell.core/about/about_remote_jobs?view=powershell-6).


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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None


## OUTPUTS

### None


## NOTES


## RELATED LINKS

