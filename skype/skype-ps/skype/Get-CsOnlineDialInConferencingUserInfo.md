---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml 
online version: https://docs.microsoft.com/powershell/module/skype/get-csonlinedialinconferencinguserinfo
applicable: Skype for Business Online
title: Get-CsOnlineDialInConferencingUserInfo
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Get-CsOnlineDialInConferencingUserInfo

## SYNOPSIS
Use the `Get-CsOnlineDialInConferencingUserInfo` cmdlet to view the properties and settings of users that are enabled for dial-in conferencing and are using Microsoft or third-party provider as their PSTN conferencing provider.

## SYNTAX

### IdentityParams
```
Get-CsOnlineDialInConferencingUserInfo [-Identity] <UserIdParameter> [-DomainController <Fqdn>] [-Force]
 [<CommonParameters>]
```

### TenantIdParams
```
Get-CsOnlineDialInConferencingUserInfo [-Tenant <Guid>] [-Skip <Int32>] [-First <Int32>]
 [-SearchQuery <String>] [-Select <FilterSelection>] [-Filter <String>] [-SortDescending]
 [-DomainController <Fqdn>] [-Force] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet will return users that have been enabled for audio conferencing using Microsoft or a third-party as the audio conferencing provider. If there are no users in the organization that have been enabled for audio conferencing, then the cmdlet will return no results.

You can use [Get-CsOnlineDialInConferencingUser](https://docs.microsoft.com/powershell/module/skype/get-csonlinedialinconferencinguser?view=skype-ps) cmdlet to return only users that have been enabled for audio conferencing using Microsoft as the audio conferencing provider.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsOnlineDialInConferencingUserInfo -Filter {Provider -eq "InterCall"} -First 10
```

This example returns users who have been enabled for audio conferencing provided by InterCall, but it will show only the first 10 users.

### -------------------------- Example 2 --------------------------
```
Get-CsOnlineDialInConferencingUserInfo -Select ConferencingProviderOther
```

This example returns users who have been enabled for audio conferencing provided by other than Microsoft.

## PARAMETERS

### -Identity
Specifies the user to retrieve. The user can be specified by using one of four formats: 1) the user's SIP address; 2) the user's user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer); and, 4) the user's Active Directory display name (for example, Ken Myer). You can also reference a user account by using the user's Active Directory distinguished name.

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: 1
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

### -Filter
Enables you to limit the returned data by filtering on Skype for Business specific attributes. For example, you can limit returned data to users who have been assigned a specific third-party provider.

The Filter parameter uses the same filtering syntax that is used by the Where-Object cmdlet. For example, a filter that returns only users who have InterCall as Audio Conferencing Provider, with Provider representing the attribute, and -eq representing the comparison operator (equal to):

{Provider -eq "InterCall"}

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

### -First
When present, the cmdlet returns the first X number of users from the list of all the users enabled for dial-in conferencing.
If this parameter is not specified, the default behavior is to return the first 100 number of users.

```yaml
Type: Int32
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

### -SearchQuery
The SearchQuery parameter specifies a search string or a query formatted using Keyword Query Language (KQL).

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

### -Select
Use next values to filter the output:
* DialInConferencingOn: Display all the users who are enabled for dial-in conferencing.
* DialInConferencingOff: Display all the users who are not enabled for dial-in conferencing.
* ConferencingProviderMS: Display all the users who are CPC enabled.
* ConferencingProviderOther: Display all the users who have 3rd party ACP.
* ReadyForMigrationToCPC: Display all the users who have 3rd party ACP and have been assigned a CPC license.
* NoFilter: Display all the users.

```yaml
Type: FilterSelection
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Skip
Skips (does not select) the specified number of items.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SortDescending
Indicates that the cmdlet sorts the objects in descending order. The default is ascending order.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
[Get-CsOnlineDialInConferencingUser](https://docs.microsoft.com/powershell/module/skype/get-csonlinedialinconferencinguser?view=skype-ps)
