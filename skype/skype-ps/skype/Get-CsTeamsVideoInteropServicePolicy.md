---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
Module Name: Skype for Business Online
title: Get-CsTeamsVideoInteropServicePolicy
schema: 2.0.0
---

# Get-CsTeamsVideoInteropServicePolicy

## SYNOPSIS

Cloud Video Interop for Teams enables 3rd party VTC devices to be able to join Teams meetings.  You can use the TeamsVideoInteropServicePolicy cmdlets to enable Cloud Video Interop for particular users or for your entire organization.

## SYNTAX

### Identity (Default)
```
Get-CsTeamsVideoInteropServicePolicy [-Tenant <System.Guid>] [[-Identity] <XdsIdentity>] [-LocalStore]
 [<CommonParameters>]
```

### Filter
```
Get-CsTeamsVideoInteropServicePolicy [-Tenant <System.Guid>] [-Filter <String>] [-LocalStore]
 [<CommonParameters>]
```

## DESCRIPTION
Cloud Video Interop for Teams enables 3rd party VTC devices to be able to join Teams meetings.  You can use the TeamsVideoInteropServicePolicy cmdlets to enable Cloud Video Interop for particular users or for your entire organization.  Microsoft provides pre-constructed policies for each of our supported partners that allow you to designate which of the partners to use for cloud video interop.  

The Get-CsTeamsVideoInteropServicePolicy cmdlet allows you to identify the pre-constructed policies that you can use in your organization.  You can assign this policy to one or more of your users leveraging the Grant-CsTeamsVideoInteropServicePolicy cmdlet.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsVideoInteropServicePolicy -Filter "*enabled*"
```

This example returns all of the policies that have been pre-constructed for you to use when turning on Cloud Video Interop with one of our supported partners.

## PARAMETERS

### -Filter
If you don't know what policies have been pre-constructed, you can use filter to identify all policies available.  This is a regex string against the name (Identity) of the pre-constructed policies.

```yaml
Type: String
Parameter Sets: Filter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Specify the known name of a policy that has been pre-constructed for you to use.

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
Internal Microsoft use only.

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

### -Tenant
Internal Microsoft use only.

```yaml
Type: System.Guid
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
For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
