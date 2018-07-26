---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: Get-CsOnlineEnhancedEmergencyServiceDisclaimer
schema: 2.0.0
---

# Get-CsOnlineEnhancedEmergencyServiceDisclaimer

## SYNOPSIS
Use the Get-CsOnlineEnhancedEmergencyServiceDisclaimer cmdlet to determine whether your organization has accepted the terms and conditions of enhanced emergency service.

## SYNTAX

```
Get-CsOnlineEnhancedEmergencyServiceDisclaimer [-CountryOrRegion <CountryInfo>] [-DomainController <Fqdn>] [-Force] [-Tenant <Guid>] [-Version <String>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
You can use this cmdlet to determine whether your organization has accepted the terms and conditions of enhanced emergency service. The United States is currently the only country supported.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsOnlineEnhancedEmergencyServiceDisclaimer -CountryOrRegion "US"
```

This example returns your organization's enhanced emergency service terms and conditions acceptance status.


## PARAMETERS

### -CountryOrRegion
Specifies the region or country whose terms and conditions you wish to verify.
The United States is currently the only country supported, but it must be specified as "US".

```yaml
Type: CountryInfo
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

### -Version
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

For more information about Windows PowerShell background jobs, see [about_Jobs](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_jobs?view=powershell-6) and [about_Remote_Jobs](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_remote_jobs?view=powershell-6).

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

### None


## OUTPUTS

### None


## NOTES


## RELATED LINKS
[Set-CsOnlineEnhancedEmergencyServiceDisclaimer](https://docs.microsoft.com/en-us/powershell/module/skype/set-csonlineenhancedemergencyservicedisclaimer?view=skype-ps)
