---
external help file:
applicable: SharePoint Online
schema: 2.0.0
---
# Grant-PnPHubSiteRights

## SYNOPSIS
Retrieve all or a specific hubsite.

## SYNTAX 

```powershell
Grant-PnPHubSiteRights -Identity <HubSitePipeBind>
                          -Principals <String[]>
                          -Rights <SPOHubSiteUserRights>
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Grant-PnPHubSiteRights -Identity https://contoso.sharepoint.com/sites/hubsite -Principals "myuser@mydomain.com","myotheruser@mydomain.com" -Rights Join 
```

This example shows how to grant right to myuser and myotheruser to associate their sites with hubsite.


## PARAMETERS

### -Identity
URL of the hub site.

```yaml
Type: HubSitePipeBind
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

### -Principals
One or more principals to add permissions for.

```yaml
Type: String[]
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```
### -Rights
Always set to the value Join.

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```


## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)
