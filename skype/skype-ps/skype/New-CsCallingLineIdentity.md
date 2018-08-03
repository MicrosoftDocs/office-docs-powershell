---
external help file: 
applicable: Skype for Business Online
title: New-CsCallingLineIdentity
schema: 2.0.0
---

# New-CsCallingLineIdentity

## SYNOPSIS
Use the `New-CsCallingLineIdentity` cmdlet to create a new Caller ID policy for your organization.

## SYNTAX

```
New-CsCallingLineIdentity [-Description <String>] [-ServiceNumber <String>] [-Confirm] [-CallingIDSubstitute <CallingIDSubstituteType>] [[-Identity] <XdsIdentity>] [-EnableUserOverride <Boolean>] [-Tenant <Guid>] [-BlockIncomingPstnCallerID <Boolean>] [-InMemory] [-WhatIf] [-Force] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
You can either change or block the Caller ID (also called a Calling Line ID) for a user. By default, the Skype for Business Online user's phone number can be seen when that user makes a call to a PSTN phone, or when a call comes in. You can create a Caller ID policy to provide an alternate displayed number, or to block any number from being displayed.

Note:  
- Identity must be unique.
- ServiceNumber must be a valid Service Number in the Skype for Business Online online telephone number inventory.
- If CallerIdSubstitute is given as “Service”, then ServiceNumber cannot be empty.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
PS C:\> New-CsCallingLineIdentity -Identity Anonymous -Description "anonymous policy" -CallingIDSubstitute Anonymous -EnableUserOverride $false
```

This example creates a new Caller ID policy that sets the Caller ID to Anonymous.

### -------------------------- Example 2 --------------------------
```
PS C:\> New-CsCallingLineIdentity -Identity "UKOrgAA" -CallingIdSubstitute "Service" -ServiceNumber "14258828080" -EnableUserOverride $false -Verbose 
```

This example creates a new Caller ID policy that sets the Caller ID to a specified service number.

### -------------------------- Example 3 --------------------------
```
PS C:\> New-CsCallingLineIdentity -Identity Anonymous -Description "anonymous policy" -CallingIDSubstitute Anonymous -EnableUserOverride $false -BlockIncomingPstnCallerID $true
```

This example creates a new Caller ID policy that blocks the incoming Caller ID.

## PARAMETERS

### -Identity
The Identity parameter identifies the Caller ID policy.

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

### -BlockIncomingPstnCallerID
The BlockIncomingPstnCallerID switch determines whether to block the incoming Caller ID. The default value is false.

The BlockIncomingPstnCallerID switch is specific to incoming calls from a PSTN caller to a user. If this is set to True and if this policy is assigned to a Lync user, then Caller ID for incoming calls is suppressed/anonymous. 


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CallingIDSubstitute
The CallingIDSubstitute parameter lets you specify an alternate Caller ID. The default value is LineUri.

```yaml
Type: CallingIDSubstituteType
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
The Confirm switch causes the command to pause processing, and requires confirmation to proceed.

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

### -Description
The Description parameter briefly describes the Caller ID policy.

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

### -EnableUserOverride
The EnableUserOverride switch lets the user override the Caller ID policy.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to suppress warning and confirmation messages. It can be useful in scripting to suppress interactive prompts. If the Force switch isn't provided in the command, you're prompted for administrative input if required. 

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

### -InMemory
Creates an object reference without actually committing the object as a permanent change. If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet’s matching Set-<cmdlet>.

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

### -ServiceNumber
The ServiceNumber parameter lets you add any valid service number for the CallingIdSubstitute. 

Note: Do not add ‘+’ to the Service number. For example, if the Service number is +1425-xxx-xxxx then valid input is 1425xxxxxxx

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
Globally unique identifier (GUID) of the tenant account whose external user communication policy are being created. For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return your tenant ID by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID

If you are using a remote session of Windows PowerShell and are connected only to Skype for Business Online you do not have to include the Tenant parameter. Instead, the tenant ID will automatically be filled in for you based on your connection information. The Tenant parameter is primarily for use in a hybrid deployment.

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

### -WhatIf
The WhatIf switch causes the command to simulate its results. By using this switch, you can view what changes would occur without having to commit those changes. 

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
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

### None

## OUTPUTS

### None

## NOTES

## RELATED LINKS
[Grant-CsCallingLineIdentity](https://docs.microsoft.com/en-us/powershell/module/skype/grant-cscallinglineidentity?view=skype-ps)

[Get-CsCallingLineIdentity](https://docs.microsoft.com/en-us/powershell/module/skype/get-cscallinglineidentity?view=skype-ps)

[Remove-CsCallingLineIdentity](https://docs.microsoft.com/en-us/powershell/module/skype/remove-cscallinglineidentity?view=skype-ps)

[Set-CsCallingLineIdentity](https://docs.microsoft.com/en-us/powershell/module/skype/set-cscallinglineidentity?view=skype-ps)

