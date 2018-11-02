---
external help file: 
applicable: Skype for Business Online
title: Get-CsCloudMeetingPolicy
schema: 2.0.0
---

# Get-CsCloudMeetingPolicy

## SYNOPSIS
Gets the policy for Skype Meetings that has been granted for a user.

## SYNTAX

### Identity (Default)
```
Get-CsCloudMeetingPolicy [-Tenant <Guid>] [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsCloudMeetingPolicy [-Tenant <Guid>] [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
The Get-CsCloudMeetingPolicy cmdlet gets the current policy for automatic scheduling of Skype Meeting features and coordination of data.
There are two polices to consider:

- AutoScheduleDisabled: 
If true, automatic schedule is disabled for the user.
- AutoScheduleEnabled:
If true, automatic schedule is enabled for the user.

## EXAMPLES

### -------------------------- Example 1 -------------------------- (Skype for Business Online)
```
Get-CsOnlineUser -identity "JaneCl" | fl CloudMeetingPolicy
```

This example shows which policies has been granted to the user by the Set-CsCloudMeetingPolicy and Grant-CsCloudMeetingPolicy cmdlets.
If the policy AutoScheduleEnabled is shown, the user is enabled for the feature.
If the policy is blank or AutoScheduleDisabled, the user is not enabled for the feature.


## PARAMETERS

### -Filter
@{Text=}

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
Specifies the identity of the hybrid public switched telephone network (PSTN) site.
For example: 

`-Identity "SeattlePSTN"`

```yaml
Type: XdsIdentity
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
Retrieves the information from the local replica of the Central Management store, rather than the Central Management store itself.

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
For example: 

`-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`

You can find your tenant ID by running this command: 

`Get-CsTenant | Select-Object DisplayName, TenantID`

If you are using a remote session of Windows PowerShell and are connected only to Skype for Business Online, you do not have to include the Tenant parameter.
The tenant ID will be determined by your connection and credentials.
The Tenant parameter is primarily for use in a hybrid deployment.

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

## OUTPUTS

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/ecb6d085-73b5-4a31-89ab-31fa411d4c85(OCS.15).aspx)


