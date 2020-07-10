---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/get-cscallinglineidentity
applicable: Skype for Business Online
title: Get-CsCallingLineIdentity
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Get-CsCallingLineIdentity

## SYNOPSIS
Use the `Get-CsCallingLineIdentity` cmdlet to display the Caller ID policies for your organization.

## SYNTAX

```
Get-CsCallingLineIdentity [[-Identity] <XdsIdentity>] [-Filter <String>] [-LocalStore] [-Tenant <Guid>] 
[<CommonParameters>]
```

## DESCRIPTION
By default, the Skype for Business Online user's phone number can be seen when that user makes a call to a PSTN phone, or when a call comes in. You can create Caller ID policies to change this behavior, and you can use the Get-CsCallingLineIdentity cmdlet to display the existing Caller ID policies for your organization.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
PS C:\> Get-CsCallingLineIdentity
```

The example gets and displays the Caller ID policies for your organization.

## PARAMETERS

### -Filter
The Filter parameter lets you insert a string through which your search results are filtered.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None


## OUTPUTS

### 
Identity                  : Global

Description               :

EnableUserOverride        : False

ServiceNumber             :

CallingIDSubstitute       : LineUri

BlockIncomingPstnCallerID : False


## NOTES


## RELATED LINKS
[Grant-CsCallingLineIdentity](https://docs.microsoft.com/powershell/module/skype/grant-cscallinglineidentity?view=skype-ps)

[New-CsCallingLineIdentity](https://docs.microsoft.com/powershell/module/skype/new-cscallinglineidentity?view=skype-ps)

[Remove-CsCallingLineIdentity](https://docs.microsoft.com/powershell/module/skype/remove-cscallinglineidentity?view=skype-ps)

[Set-CsCallingLineIdentity](https://docs.microsoft.com/powershell/module/skype/set-cscallinglineidentity?view=skype-ps)

