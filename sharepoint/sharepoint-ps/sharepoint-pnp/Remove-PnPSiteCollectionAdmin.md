---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
---
# Remove-PnPSiteCollectionAdmin

## SYNOPSIS
Removes one or more users as site collection administrators from the site collection in the current context

## SYNTAX 

```powershell
Remove-PnPSiteCollectionAdmin -Owners <UserPipeBind>
                              [-Connection <SPOnlineConnection>]
```

## DESCRIPTION
This command allows removing one to many users as site collection administrators from the site collection in the current context. All existing site collection administrators not included in this command will remain site collection administrator.

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Remove-PnPSiteCollectionAdmin -Owners "user@contoso.onmicrosoft.com"
```

This will remove user@contoso.onmicrosoft.com as a site collection owner from the site collection in the current context

### ------------------EXAMPLE 2------------------
```powershell
Remove-PnPSiteCollectionAdmin -Owners @("user1@contoso.onmicrosoft.com", "user2@contoso.onmicrosoft.com")
```

This will remove user1@contoso.onmicrosoft.com and user2@contoso.onmicrosoft.com as site collection owners from the site collection in the current context

### ------------------EXAMPLE 3------------------
```powershell
Get-PnPUser | ? Title -Like "*Doe" | Remove-PnPSiteCollectionAdmin
```

This will remove all users with their title ending with "Doe" as site collection owners from the site collection in the current context

### ------------------EXAMPLE 4------------------
```powershell
Get-PnPSiteCollectionAdmin | Remove-PnPSiteCollectionAdmin
```

This will remove all existing site collection administrators from the site collection in the current context

## PARAMETERS

### -Owners
Specifies owner(s) to remove as site collection adminstrators. Can be both users and groups.

```yaml
Type: UserPipeBind
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: True
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

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)