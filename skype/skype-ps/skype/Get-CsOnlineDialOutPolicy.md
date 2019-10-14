---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml 
applicable: Skype for Business Online
title: Get-CsOnlineDialOutPolicy
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Get-CsOnlineDialOutPolicy

## SYNOPSIS
Use the `Get-CsOnlineDialOutPolicy` cmdlet to get all the available outbound calling restriction policies in your organization.

## SYNTAX

### Identity (Default)
```
Get-CsOnlineDialOutPolicy [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsOnlineDialOutPolicy [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
In Skype for Business Online, outbound calling restriction policies are used to restrict the type of audio conferencing and end user PSTN calls that can be made by users in your organization. 
To get all the available policies in your organization run `Get-CSOnlineDialOutPolicy`.
To assign one of these policies to a user run `Grant-CsDialoutPolicy`.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CSOnlineDialOutPolicy
```

In Example 1, `Get-CSOnlineDialOutPolicy` is called without any additional parameters; this returns a collection of all the outbound calling restriction policies configured for use in your organization.

### Example 2
```powershell
PS C:\> Get-CSOnlineDialOutPolicy -Identity DialoutCPCandPSTNDisabled
```

In Example 2, `Get-CSOnlineDialOutPolicy` is used to return the per-user outbound calling restriction policy that has an Identity DialoutCPCandPSTNDisabled. Because identities are unique, this command will never return more than one item.

## PARAMETERS

### -Filter
Enables you to use wildcard characters when indicating the policy (or policies) to be returned. To return a collection of all the per-user policies, use this syntax: -Filter "tag:\*".

```yaml
Type: String
Parameter Sets: Filter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: True
```

### -Identity
Unique identifier of the outbound calling restriction policy to be returned. To refer to the global policy, use this syntax: "-Identity Global". To refer to a per-user policy, use syntax similar to this: -Identity DialoutCPCandPSTNDisabled.

If this parameter is omitted, then all the outbound calling restriction policies configured for use in your tenant will be returned.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases:

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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
[Grant-CsDialoutPolicy](https://docs.microsoft.com/powershell/module/skype/grant-csdialoutpolicy)
