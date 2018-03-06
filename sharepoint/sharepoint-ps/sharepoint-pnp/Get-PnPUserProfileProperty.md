---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
---
# Get-PnPUserProfileProperty

## SYNOPSIS
You must connect to the tenant admin website (https://:<tenant>-admin.sharepoint.com) with Connect-PnPOnline in order to use this cmdlet. 


## SYNTAX 

```powershell
Get-PnPUserProfileProperty -Account <String[]>
                           [-Connection <SPOnlineConnection>]
```

## DESCRIPTION
Requires a connection to a SharePoint Tenant Admin site.

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPUserProfileProperty -Account 'user@domain.com'
```

Returns the profile properties for the specified user

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPUserProfileProperty -Account 'user@domain.com','user2@domain.com'
```

Returns the profile properties for the specified users

## PARAMETERS

### -Account
The account of the user, formatted either as a login name, or as a claims identity, e.g. i:0#.f|membership|user@domain.com

```yaml
Type: String[]
Parameter Sets: (All)

Required: True
Position: 0
Accept pipeline input: False
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

```yaml
Type: SPOnlineConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## OUTPUTS

### Microsoft.SharePoint.Client.UserProfiles.PersonProperties

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)