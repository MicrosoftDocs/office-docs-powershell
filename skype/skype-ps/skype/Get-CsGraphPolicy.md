---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/skype/get-csgraphpolicy
applicable: Skype for Business Online
title: Get-CsGraphPolicy
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer: williamlooney
---

# Get-CsGraphPolicy

## SYNOPSIS
Use the `Get-CsGraphPolicy` cmdlet to return information about one or more graph policies configured for your organization. Graph policies determine whether users can pre-load content or files that are attached to an Outlook meeting invitation into a Skype for Business Online meeting.

## SYNTAX
```
Get-CsGraphPolicy [[-Identity] <XdsIdentity>] [-Filter <String>] [-LocalStore] [-Tenant <Guid>] 
[<CommonParameters>]
```

## DESCRIPTION
Skype for Business Online supports a Global CsGraphPolicy that is set by default to enable Outlook content pre-load in Skype for Business Online meetings. The Global policy can't be changed by you. Use the `Get-CsGraphPolicy` cmdlet to get predefined graph policies in your organization.

To return a list of all the Role-Based Access Control (RBAC) roles a cmdlet has been assigned to (including any custom RBAC roles you have created), run the following command:

Get-CsAdminRole | Where-Object {$_.Cmdlets -Match "Get-CsGraphPolicy"}

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsGraphPolicy
```

This example returns all predefined graph policies in your organization.


## PARAMETERS

### -Filter
This parameter accepts a wildcard string and returns all graph policies with identities matching that string. For example, a Filter value of "\*Enabled\*" will return all policies which contain the string "Enabled".

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
Specifies the identity of the predefined graph policy to return.

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
This parameter is reserved for internal Microsoft use

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

## OUTPUTS

## NOTES

## RELATED LINKS
[Grant-CsGraphPolicy](https://learn.microsoft.com/powershell/module/skype/grant-csgraphpolicy?view=skype-ps)
