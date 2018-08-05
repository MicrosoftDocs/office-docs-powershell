---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: Get-CsIPPhonePolicy
schema: 2.0.0
---

# Get-CsIPPhonePolicy

## SYNOPSIS
Use the Get-CsIPPhonePolicy cmdlet to get all the settings of the Skype for Business Online global IP phone policy. IP phone policies define the Skype for Business Online features that are available to users.

## SYNTAX

```
Get-CsIPPhonePolicy [[-Identity] <XdsIdentity>] [-Filter <String>] [-LocalStore] [-Tenant <Guid>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
IP phone policies are applied each time a user accesses the system via an IP phone device. The Get-CsIPPhonePolicy cmdlet retrieves the global IP phone policy that has been configured in your organization along with all their settings.

## EXAMPLES

### -------------------------- Example 1 ------------------------
```
PS C:\> Get-CsIPPhonePolicy
```

This example returns the global IP phone policy along with all their settings.

## PARAMETERS

### -Filter
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

### -Identity
This parameter is reserved for internal Microsoft use.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
This parameter is reserved for internal Microsoft use.

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

### System.Object


## NOTES


## RELATED LINKS
[Grant-CsIPPhonePolicy](https://docs.microsoft.com/en-us/powershell/module/skype/grant-csipphonepolicy?view=skype-ps)

[Set-CsIPPhonePolicy](https://docs.microsoft.com/en-us/powershell/module/skype/set-csipphonepolicy?view=skype-ps)
