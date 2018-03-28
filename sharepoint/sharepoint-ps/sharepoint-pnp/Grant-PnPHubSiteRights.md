---
external help file:
applicable: SharePoint Online
schema: 2.0.0
---
# Grant-PnPHubSiteRights

## SYNOPSIS
Grants rights to users or mail-enabled security groups to access the hub site.

## SYNTAX 

```powershell
Grant-PnPHubSiteRights [-Identity] <SitePipeBind> -Principals
    <string[]> -Rights {Join}  [<CommonParameters>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
PS C:\> Grant-PnPHubSiteRights -Identity https://contoso.sharepoint.com/sites/MarketingHub/ -Principals alexw@contoso.o
nmicrosoft.com -Rights Join
```

This example shows how to grant rights to user Alexw to associate his sites with the marketing hub site.

## PARAMETERS

### -Identity

URL of the hub site.

```yaml
Type: SpoSitePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Principals

One or more principles to add permissions for.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Rights

Always set to the value **Join**. Any user or group with **Join** permissions can view and join the hub site.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)
